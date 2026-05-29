import { useState } from 'react'
import { ArrowUpRight, Monitor, Smartphone, Cloud, Eye } from 'lucide-react'

const categories = ['Todos', 'Web Apps', 'Móvil', 'Cloud / SaaS']

const projects = [
  {
    title: 'Aura Fintech Platform',
    category: 'Web Apps',
    desc: 'Arquitectura completa y frontend de una pasarela de pagos B2B de alto flujo con analíticas en tiempo real y paneles interactivos.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    icon: <Monitor size={18} />,
    color: '#8FA48B' // Sage
  },
  {
    title: 'Natura Delivery App',
    category: 'Móvil',
    desc: 'Aplicación nativa móvil para la coordinación logística forestal y tracking de flotas terrestres con geolocalización en tiempo real.',
    tech: ['Swift', 'Kotlin', 'Mapbox', 'GraphQL'],
    icon: <Smartphone size={18} />,
    color: '#2F363F' // Slate
  },
  {
    title: 'Lignum Carbon Analytics',
    category: 'Cloud / SaaS',
    desc: 'Portal SaaS multi-inquilino de analíticas y sensores IoT para medir la huella ecológica y compensación de carbono empresarial.',
    tech: ['React', 'Python', 'AWS Lambda', 'Docker'],
    icon: <Cloud size={18} />,
    color: '#8FA48B'
  },
  {
    title: 'Huilo Logistics Portal',
    category: 'Web Apps',
    desc: 'Dashboard interactivo de control de inventario de materias primas y distribución en terminales marítimas y terrestres.',
    tech: ['Vite', 'React', 'Go', 'Redis'],
    icon: <Monitor size={18} />,
    color: '#2F363F'
  }
]

export default function Portfolio() {
  const [activeCat, setActiveCat] = useState('Todos')

  const filteredProjects = projects.filter((p) => {
    if (activeCat === 'Todos') return true
    return p.category === activeCat
  })

  return (
    <section id="portfolio" className="section section--darkest section--border-bottom">
      <div className="container">
        <style>{`
          .portfolio-filters {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            margin-bottom: 4rem;
            flex-wrap: wrap;
          }
          .portfolio-filter-btn {
            font-size: 0.86rem;
            font-weight: 600;
            color: var(--text-secondary);
            padding: 0.5rem 1.25rem;
            border-radius: var(--radius-full);
            border: 1px solid var(--border);
            transition: all var(--duration) var(--ease);
          }
          .portfolio-filter-btn.active, .portfolio-filter-btn:hover {
            background: var(--accent);
            color: var(--bg-darkest);
            border-color: var(--accent);
            box-shadow: 0 4px 15px rgba(143, 164, 139, 0.3);
          }
          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            gap: 2.5rem;
          }
          @media (max-width: 480px) {
            .portfolio-grid {
              grid-template-columns: 1fr;
            }
          }
          .portfolio-card {
            display: flex;
            flex-direction: column;
            border: 1px solid var(--border-card);
            border-radius: var(--radius-lg);
            background: var(--bg-card);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: all var(--duration) var(--ease);
          }
          .portfolio-card:hover {
            transform: translateY(-8px);
            border-color: var(--border-hover);
            box-shadow: var(--shadow-lg), var(--shadow-glow);
          }
          
          /* Visual Mockup inside Card */
          .portfolio-visual {
            height: 200px;
            background: linear-gradient(135deg, #121619 0%, #1A2227 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          .portfolio-visual-glow {
            position: absolute;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.15;
            transition: all var(--duration) var(--ease);
          }
          .portfolio-card:hover .portfolio-visual-glow {
            opacity: 0.35;
            transform: scale(1.2);
          }
          .portfolio-card-hover-overlay {
            position: absolute;
            inset: 0;
            background: rgba(12, 14, 16, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            opacity: 0;
            transition: all var(--duration) var(--ease);
            z-index: 2;
          }
          .portfolio-visual:hover .portfolio-card-hover-overlay {
            opacity: 1;
          }

          .portfolio-details {
            padding: 2.2rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }
          .portfolio-tech-tag {
            font-size: 0.72rem;
            font-weight: 600;
            color: var(--accent-light);
            background: rgba(143, 164, 139, 0.06);
            border: 1px solid rgba(143, 164, 139, 0.15);
            border-radius: var(--radius-sm);
            padding: 0.25rem 0.6rem;
            font-family: var(--font-body);
          }
        `}</style>

        {/* Section Header */}
        <div className="section-header reveal active">
          <span className="badge">Nuestro Portafolio</span>
          <h2>
            Casos de Éxito & Plataformas <br />
            <span className="text-gradient">En Producción Activa</span>
          </h2>
          <p>
            Explora las arquitecturas de software robustas y elegantes que hemos desarrollado
            para optimizar los flujos operativos de diversas industrias tecnológicas.
          </p>
        </div>

        {/* Categories filters */}
        <div className="portfolio-filters reveal active">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-filter-btn ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((p, idx) => (
            <article key={idx} className="portfolio-card reveal active">
              {/* Visual Graphic Representation */}
              <div className="portfolio-visual">
                <div
                  className="portfolio-visual-glow"
                  style={{ background: p.color }}
                />
                
                {/* stylized icon container */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-light)',
                    zIndex: 1,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {p.icon}
                </div>

                {/* Glass graphic background detail */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -15,
                    left: 20,
                    width: '80%',
                    height: 50,
                    background: 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px 8px 0 0',
                    zIndex: 0
                  }}
                />

                {/* Hover overlay details */}
                <div className="portfolio-card-hover-overlay">
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFF', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Eye size={16} /> Ver Detalles <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Title & Stats */}
              <div className="portfolio-details">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-light)', fontWeight: 700 }}>
                    {p.category}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {p.title}
                </h3>
                
                <p style={{ fontSize: '0.92rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {p.desc}
                </p>

                {/* Tech list tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {p.tech.map((t, index) => (
                    <span key={index} className="portfolio-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
