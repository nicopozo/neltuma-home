import React, { useState } from 'react'
import Logo from './Logo'
import { Github, Linkedin, Send, Check } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
    }, 1500)
  }

  return (
    <footer
      style={{
        background: 'var(--bg-darkest)',
        borderTop: '1px solid var(--border)',
        padding: '5rem 0 3rem',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <style>{`
          .footer-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
            gap: 4rem;
            margin-bottom: 4rem;
          }
          @media (max-width: 968px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 3rem;
            }
          }
          @media (max-width: 480px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }
          }
          
          .footer-title {
            font-size: 0.95rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            font-family: var(--font-body);
          }
          
          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
          }
          .footer-link-item {
            font-size: 0.88rem;
            color: var(--text-secondary);
            transition: all 0.2s ease;
          }
          .footer-link-item:hover {
            color: var(--accent-light);
            transform: translateX(2px);
          }
          
          .newsletter-input-box {
            display: flex;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border-card);
            border-radius: var(--radius-md);
            padding: 0.25rem;
            margin-top: 1rem;
            transition: all var(--duration) var(--ease);
          }
          .newsletter-input-box:focus-within {
            border-color: var(--accent);
            box-shadow: 0 0 0 2px rgba(143, 164, 139, 0.1);
          }
          .newsletter-input {
            border: none;
            background: transparent;
            padding: 0.6rem 0.8rem;
            font-size: 0.88rem;
            flex-grow: 1;
            outline: none;
          }
          .newsletter-btn {
            background: var(--grad-accent);
            color: #FFFFFF;
            width: 38px;
            height: 38px;
            border-radius: var(--radius-sm);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--duration) var(--ease);
          }
          .newsletter-btn:hover {
            transform: scale(1.04);
            box-shadow: 0 4px 10px rgba(143, 164, 139, 0.2);
          }
          
          .social-circle {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            transition: all var(--duration) var(--ease);
          }
          .social-circle:hover {
            background: rgba(143, 164, 139, 0.08);
            border-color: var(--accent);
            color: var(--accent-light);
            transform: translateY(-2px);
          }
        `}</style>

        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <Logo size={40} style={{ marginBottom: '1.25rem' }} />
            <p style={{ fontSize: '0.88rem', marginTop: '1rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Ingeniería de software de alta fidelidad. Construimos plataformas digitales 
              robustas inspiradas en la solidez y el crecimiento continuo.
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-circle" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-circle" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 className="footer-title">Servicios</h4>
            <nav className="footer-links" aria-label="Servicios footer">
              <a href="#services-custom" className="footer-link-item">Software a Medida</a>
              <a href="#services-mobile" className="footer-link-item">Aplicaciones Móviles</a>
              <a href="#services-saas" className="footer-link-item">Arquitectura SaaS</a>
              <a href="#services-ux" className="footer-link-item">Diseño UX/UI Premium</a>
            </nav>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="footer-title">Compañía</h4>
            <nav className="footer-links" aria-label="Compañía footer">
              <a href="#home" className="footer-link-item">Inicio</a>
              <a href="#methodology" className="footer-link-item">Metodología</a>
              <a href="#stats" className="footer-link-item">Valores Técnicos</a>
            </nav>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="footer-title">Neltuma Dispatch</h4>
            <p style={{ fontSize: '0.86rem' }}>
              Suscríbete para recibir novedades de ingeniería, seguridad cloud y tendencias tecnológicas.
            </p>
            
            {subscribed ? (
              <div
                style={{
                  marginTop: '1rem',
                  fontSize: '0.84rem',
                  color: 'var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(143, 164, 139, 0.05)',
                  border: '1px solid var(--border)',
                  padding: '0.6rem 1rem',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <Check size={16} /> ¡Suscripción completada con éxito!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-input-box">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="tuemail@dominio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Correo para boletín"
                  required
                />
                <button type="submit" className="newsletter-btn" aria-label="Suscribirse">
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Neltuma Labs. Todos los derechos reservados.
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Diseñado & Desarrollado en Rio Ceballos, Córdoba, Argentina.
          </div>
        </div>
      </div>
    </footer>
  )
}
