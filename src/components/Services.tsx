import { Cpu, Smartphone, Cloud, PenTool, CheckCircle } from 'lucide-react'

const serviceItems = [
  {
    id: 'services-custom',
    icon: <Cpu size={28} />,
    title: 'Software a Medida',
    desc: 'Diseñamos y desarrollamos plataformas empresariales a la medida de tus flujos operativos, garantizando escalabilidad técnica y robustez.',
    bullets: ['Desarrollo Web (React, Node.js, Go)', 'Sistemas Core Enterprise', 'Refactorización y API Integrations']
  },
  {
    id: 'services-mobile',
    icon: <Smartphone size={28} />,
    title: 'Aplicaciones Móviles',
    desc: 'Creamos experiencias nativas y multiplataforma ágiles y atractivas para iOS y Android que conectan a tu negocio con su audiencia global.',
    bullets: ['Desarrollo iOS (Swift) & Android (Kotlin)', 'Multiplataforma (Flutter / React Native)', 'Publicación y Optimización de App Store']
  },
  {
    id: 'services-saas',
    icon: <Cloud size={28} />,
    title: 'Arquitectura SaaS & Cloud',
    desc: 'Construimos plataformas cloud nativas seguras y eficientes para optimizar costes de cómputo y potenciar tu entrega continua.',
    bullets: ['Infraestructura como Código (IaC)', 'Orquestación de Contenedores (Docker, K8s)', 'Arquitecturas Serverless & Microservicios']
  },
  {
    id: 'services-ux',
    icon: <PenTool size={28} />,
    title: 'Diseño UX/UI Premium',
    desc: 'Diferenciamos tu marca mediante interfaces de usuario limpias, interactivas y refinadas, priorizando la facilidad de uso y la conversión.',
    bullets: ['Sistemas de Diseño Consistentes', 'Wireframing & Prototipado Interactivo', 'Auditoría UX y Optimización de Conversión']
  }
]

export default function Services() {
  return (
    <section id="services" className="section section--darkest section--border-bottom">
      {/* Mesh background grid lines */}
      <div className="organic-bg">
        <div className="blob blob--1" style={{ top: '40%', left: '70%', background: 'var(--primary)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
          }
          .service-icon-box {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border-radius: var(--radius-md);
            background: rgba(143, 164, 139, 0.08);
            border: 1px solid var(--border);
            color: var(--accent-light);
            margin-bottom: 1.5rem;
            transition: all var(--duration) var(--ease);
          }
          .service-card:hover .service-icon-box {
            background: var(--grad-accent);
            color: #FFFFFF;
            border-color: transparent;
            box-shadow: 0 4px 15px rgba(143, 164, 139, 0.3);
          }
          .bullet-list {
            margin-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.04);
            padding-top: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }
          .bullet-item {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-size: 0.84rem;
            color: var(--text-secondary);
          }
          .bullet-icon {
            color: var(--accent);
            flex-shrink: 0;
          }
        `}</style>

        {/* Section Title */}
        <div className="section-header reveal active">
          <span className="badge">Nuestros Servicios</span>
          <h2 style={{ letterSpacing: '-0.02em' }}>
            Ingeniería de Software para <br />
            <span className="text-gradient">Empresas con Visión</span>
          </h2>
          <p>
            Proveemos capacidades técnicas sofisticadas que abarcan todo el espectro tecnológico
            para asegurar el éxito operativo de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {serviceItems.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`glass-card service-card reveal active delay-${index + 1}`}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="service-icon-box">
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.92rem', flexGrow: 1 }}>
                {item.desc}
              </p>

              {/* Bullet list of technologies / steps */}
              <ul className="bullet-list">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="bullet-item">
                    <CheckCircle size={14} className="bullet-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
