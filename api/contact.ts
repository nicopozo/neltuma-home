import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos obligatorios en el formulario' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Neltuma Labs <onboarding@resend.dev>',
      to: 'nicopozo@gmail.com',
      replyTo: email,
      subject: `Contacto [${projectType}]: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #0c0e10; color: #f3f4f6; border-radius: 12px; border: 1px solid #1f2937;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8fa48b; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.02em;">Neltuma Labs</h1>
            <p style="color: #9ca3af; font-size: 14px; margin-top: 5px;">Nueva Solicitud de Contacto</p>
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.05);">
            <p style="margin: 0 0 10px 0;"><strong style="color: #8fa48b;">Nombre:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #8fa48b;">Email:</strong> <a href="mailto:${email}" style="color: #f3f4f6; text-decoration: underline;">${email}</a></p>
            <p style="margin: 0;"><strong style="color: #8fa48b;">Tipo de Proyecto:</strong> ${projectType}</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <p style="margin: 0 0 10px 0; font-weight: 600; color: #8fa48b;">Mensaje / Visión:</p>
            <div style="background: rgba(255, 255, 255, 0.02); border-left: 3px solid #8fa48b; padding: 15px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #d1d5db;">${message}</div>
          </div>
          
          <div style="text-align: center; border-top: 1px solid #1f2937; padding-top: 20px; font-size: 12px; color: #6b7280;">
            Este correo fue enviado automáticamente desde el formulario de contacto de Neltuma Labs.
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error de Resend:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('Internal Server Error:', err);
    return res.status(500).json({ error: err.message || 'Error interno del servidor' });
  }
}
