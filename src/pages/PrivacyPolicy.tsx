import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'
import Logo from '../components/Logo'

const sections = [
  {
    num: '1',
    title: 'Información que recopilamos',
    content: null,
    list: [
      'Nombre y apellido',
      'Dirección de correo electrónico',
      'Mensajes enviados a través de formularios o canales de contacto',
      'Información técnica básica (como tipo de dispositivo o navegador) para mejorar la experiencia del usuario',
    ],
  },
  {
    num: '2',
    title: 'Cómo utilizamos la información',
    content: 'La información recopilada puede ser utilizada para:',
    list: [
      'Responder consultas y brindar soporte técnico',
      'Operar y mejorar nuestros servicios, aplicaciones y soluciones',
      'Enviar comunicaciones relacionadas con nuestros productos o actualizaciones (solo si el usuario lo acepta)',
      'Analizar el uso de nuestros servicios para mejorar su funcionamiento',
    ],
  },
  {
    num: '3',
    title: 'Compartir información con terceros',
    content: 'Podemos compartir datos únicamente con proveedores que nos ayudan a operar nuestros servicios, tales como:',
    list: [
      'Servicios de hosting o almacenamiento en la nube',
      'Herramientas de análisis o automatización',
      'Plataformas de comunicación utilizadas para soporte',
    ],
    footer: 'Nunca vendemos datos personales a terceros.',
  },
  {
    num: '4',
    title: 'Seguridad de la información',
    content: 'Implementamos medidas razonables de seguridad para proteger los datos personales contra accesos no autorizados, alteraciones o divulgación. Nuestras soluciones se construyen con buenas prácticas de seguridad desde el diseño.',
    list: null,
  },
  {
    num: '5',
    title: 'Derechos del usuario',
    content: 'Los usuarios pueden solicitar:',
    list: [
      'Acceso a sus datos personales',
      'Corrección o actualización de la información',
      'Eliminación de sus datos de nuestros registros',
    ],
    footer: 'Para ejercer estos derechos, pueden contactarnos a: nicopozo+neltuma@gmail.com',
  },
  {
    num: '6',
    title: 'Conservación de los datos',
    content: 'Los datos se conservarán únicamente durante el tiempo necesario para cumplir con los fines mencionados o según lo exija la ley aplicable.',
    list: null,
  },
  {
    num: '7',
    title: 'Cambios en esta política',
    content: 'Podemos actualizar esta Política de Privacidad en cualquier momento. La versión vigente estará siempre disponible en esta misma URL. Recomendamos revisarla periódicamente.',
    list: null,
  },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Política de Privacidad — Neltuma Labs'
    return () => {
      document.title = 'Neltuma Labs'
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-darkest)', color: 'var(--text-primary)' }}>
      <style>{`
        .privacy-hero {
          background: linear-gradient(180deg, rgba(143,164,139,0.06) 0%, transparent 100%);
          border-bottom: 1px solid var(--border);
          padding: 2rem 0 3rem;
        }
        .privacy-container {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .privacy-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.88rem;
          text-decoration: none;
          margin-bottom: 3.5rem;
          transition: color var(--duration) var(--ease);
        }
        .privacy-back:hover { color: var(--accent); }
        .privacy-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(143,164,139,0.1);
          border: 1px solid rgba(143,164,139,0.25);
          border-radius: 2rem;
          padding: 0.35rem 1rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-light);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .privacy-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .privacy-updated {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 1rem;
        }
        .privacy-content {
          padding: 4rem 0 6rem;
        }
        .privacy-section {
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border-card);
        }
        .privacy-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .privacy-section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .privacy-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(143,164,139,0.12);
          border: 1px solid rgba(143,164,139,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-light);
          flex-shrink: 0;
        }
        .privacy-section-title {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .privacy-text {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .privacy-list {
          list-style: none;
          padding: 0;
          margin: 0.75rem 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .privacy-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.93rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .privacy-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          margin-top: 0.55rem;
          flex-shrink: 0;
        }
        .privacy-footer-note {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: var(--accent-light);
          font-style: italic;
        }
        .privacy-contact-card {
          background: rgba(143,164,139,0.06);
          border: 1px solid rgba(143,164,139,0.18);
          border-radius: var(--radius-md);
          padding: 2rem 2.5rem;
          margin-top: 1rem;
        }
        .privacy-contact-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .privacy-contact-card p {
          font-size: 0.93rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0;
        }
        .privacy-contact-card a {
          color: var(--accent-light);
          text-decoration: none;
        }
        .privacy-contact-card a:hover {
          text-decoration: underline;
        }
        .privacy-footer {
          border-top: 1px solid var(--border);
          padding: 2rem 0;
          text-align: center;
        }
        .privacy-footer p {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin: 0.5rem 0 0;
        }
      `}</style>

      {/* Hero */}
      <div className="privacy-hero">
        <div className="privacy-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Back link */}
          <Link to="/" className="privacy-back">
            <ArrowLeft size={15} /> Volver al inicio
          </Link>

          {/* Centered content */}
          <div style={{ textAlign: 'center' }}>
            <div className="privacy-badge" style={{ justifyContent: 'center' }}>
              <Shield size={13} /> Privacidad
            </div>
            <h1 className="privacy-title">
              Política de <span className="text-gradient">Privacidad</span>
            </h1>
            <p className="privacy-text" style={{ maxWidth: '580px', marginBottom: 0, marginLeft: 'auto', marginRight: 'auto' }}>
              En Neltuma Labs valoramos la privacidad de nuestros usuarios y nos comprometemos
              a proteger sus datos personales de forma responsable y transparente.
            </p>
            <p className="privacy-updated">Última actualización: mayo de 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="privacy-content">
        <div className="privacy-container">
          {sections.map((s) => (
            <div key={s.num} className="privacy-section">
              <div className="privacy-section-header">
                <div className="privacy-num">{s.num}</div>
                <h2 className="privacy-section-title">{s.title}</h2>
              </div>
              {s.content && <p className="privacy-text">{s.content}</p>}
              {s.list && (
                <ul className="privacy-list">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {s.footer && <p className="privacy-footer-note">{s.footer}</p>}
            </div>
          ))}

          {/* Contact card */}
          <div className="privacy-contact-card">
            <h3>8. Contacto</h3>
            <p>
              <strong>Neltuma Labs</strong><br />
              <a href="mailto:nicopozo+neltuma@gmail.com">nicopozo+neltuma@gmail.com</a><br />
              Arrayán 31, Río Ceballos, Córdoba, Argentina
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="privacy-footer">
        <div className="privacy-container">
          <Logo size={32} showText={true} animated={false} />
          <p>© {new Date().getFullYear()} Neltuma Labs. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
