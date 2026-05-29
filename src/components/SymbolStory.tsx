import { Shield, Sparkles, TreePine } from 'lucide-react'
import Logo from './Logo'

export default function SymbolStory() {
  return (
    <section id="symbol-story" className="section section--darkest section--border-bottom" style={{ background: '#090B0C' }}>
      {/* Background blobs */}
      <div className="organic-bg">
        <div className="blob blob--2" style={{ top: '50%', right: '10%', background: 'rgba(143, 164, 139, 0.05)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          .story-grid {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 5rem;
            align-items: center;
          }
          @media (max-width: 900px) {
            .story-grid {
              grid-template-columns: 1fr;
              gap: 3.5rem;
              text-align: center;
            }
            .story-symbol-visual {
              margin: 0 auto;
            }
            .story-pillars-grid {
              text-align: left;
            }
          }
          
          .story-symbol-visual {
            position: relative;
            width: 336px;
            height: 336px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle, rgba(143, 164, 139, 0.06) 0%, transparent 70%);
            border-radius: 50%;
            border: 1px solid rgba(143, 164, 139, 0.1);
          }
          
          .story-pillar-card {
            display: flex;
            gap: 1.25rem;
            padding: 1.5rem;
            border-radius: var(--radius-md);
            background: rgba(255, 255, 255, 0.01);
            border: 1px solid rgba(255, 255, 255, 0.02);
            transition: all var(--duration) var(--ease);
          }
          .story-pillar-card:hover {
            background: rgba(143, 164, 139, 0.03);
            border-color: rgba(143, 164, 139, 0.15);
            transform: translateX(5px);
          }
          @media (max-width: 900px) {
            .story-pillar-card:hover {
              transform: translateY(-3px);
            }
          }
          
          .story-pillar-icon-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: var(--radius-sm);
            background: rgba(143, 164, 139, 0.08);
            color: var(--accent-light);
            flex-shrink: 0;
          }
        `}</style>

        <div className="story-grid">
          {/* Left Column: Core Identity & Logo Protagonist */}
          <div className="reveal">
            <span className="badge" style={{
              display: 'inline-block',
              background: 'rgba(143, 164, 139, 0.08)',
              border: '1px solid var(--border)',
              color: 'var(--accent-light)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.4rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.2rem'
            }}>Nuestra Identidad</span>
            
            <h2 style={{ letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              El Símbolo Neltuma: <br />
              <span className="text-gradient">Naturaleza & Ingeniería</span>
            </h2>
            
            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              El logotipo de Neltuma Labs no es una mera coincidencia estética; es un manifiesto visual de nuestra filosofía.
              Representa la sinergia perfecta entre la <strong>estabilidad orgánica de la naturaleza</strong> y la <strong>precisión de la ingeniería de software</strong>.
            </p>

            {/* Visual Centerpiece in the story */}
            <div className="story-symbol-visual reveal delay-2">
              <Logo size={216} showText={false} animated={true} />
              {/* Spinning faint orbit rings */}
              <div style={{
                position: 'absolute',
                inset: -24,
                border: '1px dashed rgba(143, 164, 139, 0.15)',
                borderRadius: '50%',
                animation: 'spin 40s linear infinite'
              }} />
            </div>
          </div>

          {/* Right Column: Three Pillars of the Logo */}
          <div className="story-pillars-grid reveal delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Pillar 1 */}
            <div className="story-pillar-card">
              <div className="story-pillar-icon-box">
                <TreePine size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                  La Neltuma o Algarrobo (Resiliencia)
                </h3>
                <p style={{ fontSize: '0.86rem', lineHeight: 1.6 }}>
                  El núcleo central representa una Neltuma (algarrobo), árbol emblemático conocido por su extrema resiliencia 
                  y capacidad de prosperar. Simboliza la solidez de nuestra ingeniería y la durabilidad de las plataformas que creamos.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="story-pillar-card">
              <div className="story-pillar-icon-box">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                  Ecosistema Digital (Estructura)
                </h3>
                <p style={{ fontSize: '0.86rem', lineHeight: 1.6 }}>
                  Las ramas y hojas están diseñadas de forma modular y simétrica. Representan la interconexión lógica, 
                  los flujos dinámicos de datos y la automatización inteligente dentro de un ecosistema tecnológico unificado.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="story-pillar-card">
              <div className="story-pillar-icon-box">
                <Shield size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                  Órbita de Ciberseguridad (Integridad)
                </h3>
                <p style={{ fontSize: '0.86rem', lineHeight: 1.6 }}>
                  El arco circular que rodea al algarrobo representa la protección perimetral, la fiabilidad y la infraestructura cloud. 
                  Su apertura simboliza la flexibilidad del software y su predisposición a integrarse con sistemas globales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
