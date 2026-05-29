import { useState } from 'react'
import { Eye, FileCode, CheckSquare, Zap } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Descubrimiento & Estrategia',
    icon: <Eye size={20} />,
    headline: 'Entendemos los cimientos de tu negocio.',
    desc: 'Realizamos talleres exhaustivos con tus stakeholders para mapear requisitos técnicos y de negocio, comprender el mercado objetivo y definir el alcance inicial y las métricas de éxito (KPIs) del producto.',
    deliverables: ['Pliego de Requisitos Técnicos', 'Diseño de la Arquitectura de Datos', 'Estrategia de Lanzamiento e Iteración']
  },
  {
    num: '02',
    title: 'Arquitectura & Diseño UX/UI',
    icon: <FileCode size={20} />,
    headline: 'Interfaces refinadas estructuradas para el usuario.',
    desc: 'Esbozamos flujos interactivos de alto rendimiento y diseñamos pantallas definitivas pixel-perfect que respetan el sistema de marca, asegurando una experiencia atractiva en cualquier dispositivo.',
    deliverables: ['Mapas de Experiencia (User Journey Map)', 'Prototipos Interactivos de Alta Fidelidad', 'Sistema de Diseño UI Consistente']
  },
  {
    num: '03',
    title: 'Ingeniería & Desarrollo Ágil',
    icon: <CheckSquare size={20} />,
    headline: 'Código optimizado y entrega en sprints rápidos.',
    desc: 'Escribimos software limpio y testeado bajo estándares internacionales. Trabajamos en sprints de dos semanas con integración continua (CI/CD) para entregarte avances de producción reales desde el inicio.',
    deliverables: ['Sprints Incrementales Funcionales', 'Control de Calidad Automático & Tests', 'Plataforma en Entorno de Staging']
  },
  {
    num: '04',
    title: 'Lanzamiento & Evolución',
    icon: <Zap size={20} />,
    headline: 'Entrega en producción, monitorización y optimización.',
    desc: 'Desplegamos el producto de forma controlada en infraestructuras Cloud escalables (AWS, GCP). Monitorizamos rendimiento de latencia, seguridad de red y comportamiento de usuario para optimizar de forma recurrente.',
    deliverables: ['Despliegue Multi-Región Automatizado', 'Establecimiento de SLA y Mantenimiento', 'Planificación de Backlog Evolutivo']
  }
]

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="methodology" className="section section--darkest section--border-bottom">
      <div className="organic-bg">
        <div className="blob blob--2" style={{ top: '10%', left: '10%', background: 'var(--accent-glow)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          .methodology-tabs {
            display: flex;
            gap: 1rem;
            margin-bottom: 3.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding-bottom: 1rem;
            overflow-x: auto;
            scrollbar-width: none; /* Firefox */
          }
          .methodology-tabs::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }
          .method-tab-btn {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.8rem 1.4rem;
            border-radius: var(--radius-md);
            color: var(--text-secondary);
            font-size: 0.92rem;
            font-weight: 600;
            white-space: nowrap;
            transition: all var(--duration) var(--ease);
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.03);
          }
          .method-tab-btn.active {
            background: rgba(143, 164, 139, 0.08);
            border-color: var(--border-hover);
            color: var(--accent-light);
          }
          .method-tab-btn:hover {
            color: var(--text-primary);
            background: rgba(255, 255, 255, 0.04);
          }
          
          .method-content-card {
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 4rem;
            align-items: center;
            background: var(--bg-card);
            border: 1px solid var(--border-card);
            border-radius: var(--radius-lg);
            padding: 3.5rem;
            box-shadow: var(--shadow-lg);
          }
          
          @media (max-width: 900px) {
            .method-content-card {
              grid-template-columns: 1fr;
              gap: 2.5rem;
              padding: 2.2rem;
            }
          }

          .deliverable-tag {
            background: rgba(143, 164, 139, 0.05);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            padding: 0.5rem 1rem;
            font-size: 0.82rem;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        `}</style>

        {/* Section Header */}
        <div className="section-header reveal active">
          <span className="badge">Nuestra Metodología</span>
          <h2>
            Un Método Riguroso para <br />
            <span className="text-gradient">Garantizar Resultados</span>
          </h2>
          <p>
            Reducimos la incertidumbre operativa mediante un proceso de desarrollo iterativo 
            y totalmente transparente orientado a la calidad y la velocidad.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="methodology-tabs reveal active">
          {steps.map((step, idx) => (
            <button
              key={idx}
              className={`method-tab-btn ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{step.num}</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Tab Content Card */}
        <div className="method-content-card reveal active">
          {/* Details Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '4.5rem',
                fontWeight: 800,
                color: 'rgba(143, 164, 139, 0.12)',
                lineHeight: 1,
                marginBottom: '1rem'
              }}
            >
              {steps[activeStep].num}
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
              {steps[activeStep].title}
            </h3>
            
            <p style={{ fontWeight: 600, color: 'var(--accent-light)', marginBottom: '1.2rem', fontSize: '1.05rem' }}>
              {steps[activeStep].headline}
            </p>
            
            <p style={{ fontSize: '0.96rem', marginBottom: '2rem' }}>
              {steps[activeStep].desc}
            </p>
          </div>

          {/* Deliverables / Highlight Column */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              borderLeft: '2px solid var(--accent)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontWeight: 700 }}>
              Entregables Clave
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {steps[activeStep].deliverables.map((item, idx) => (
                <div key={idx} className="deliverable-tag">
                  {steps[activeStep].icon}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
