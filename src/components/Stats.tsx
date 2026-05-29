import { Server, Activity, Compass, Code } from 'lucide-react'

const statItems = [
  {
    label: 'Alta Disponibilidad',
    desc: 'Diseñamos arquitecturas tolerantes a fallos orientadas a la continuidad del negocio, minimizando el riesgo de interrupciones en producción.',
    icon: <Server size={22} />
  },
  {
    label: 'Rendimiento Optimizado',
    desc: 'Código optimizado y cacheado estratégicamente para ofrecer respuestas rápidas y una experiencia fluida sin importar la carga.',
    icon: <Activity size={22} />
  },
  {
    label: 'Proceso Ágil Transparente',
    desc: 'Sprints incrementales con acceso continuo a entornos de staging para que veas el avance real en todo momento.',
    icon: <Compass size={22} />
  },
  {
    label: 'Código Limpio desde el Inicio',
    desc: 'Aplicamos TypeScript estricto, linting riguroso y revisiones de código desde el primer día para evitar deuda técnica acumulada.',
    icon: <Code size={22} />
  }
]

export default function Stats() {
  return (
    <section id="stats" className="section section--darkest section--border-bottom">
      <div className="container">
        <style>{`
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 2rem;
          }
          .stat-icon-wrapper {
            color: var(--accent);
            margin-bottom: 1.25rem;
            display: inline-flex;
          }
          .stat-number {
            font-size: clamp(2rem, 4vw, 3.2rem);
            font-weight: 800;
            line-height: 1;
            margin-bottom: 0.5rem;
            letter-spacing: -0.04em;
          }
          .stat-label-text {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.75rem;
          }
        `}</style>

        {/* Section Header */}
        <div className="section-header reveal active">
          <span className="badge">Nuestros Valores Técnicos</span>
          <h2>
            Principios de Ingeniería que <br />
            <span className="text-gradient">Guían Cada Decisión</span>
          </h2>
          <p>
            Construimos software con criterio, disciplina y foco en la calidad sostenida.
            Cada decisión técnica está orientada a la solidez del producto a largo plazo.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {statItems.map((s, idx) => (
            <div
              key={idx}
              className="glass-card reveal active delay-1"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(17, 22, 25, 0.4)',
                borderColor: 'rgba(143, 164, 139, 0.08)'
              }}
            >
              <div className="stat-icon-wrapper">
                {s.icon}
              </div>
              <h3 className="stat-label-text" style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                {s.label}
              </h3>
              <p style={{ fontSize: '0.88rem' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
