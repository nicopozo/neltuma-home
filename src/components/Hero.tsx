import { useEffect, useRef } from 'react'
import { ArrowRight, Terminal, Server, ShieldCheck } from 'lucide-react'
import Logo from './Logo'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    // Handle resizing
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 2.5 + 0.5
        this.speedX = Math.random() * 0.4 - 0.2
        this.speedY = Math.random() * 0.4 - 0.2
        
        // Organic tech colors (sage green & slate charcoal values)
        const rand = Math.random()
        if (rand < 0.45) {
          this.color = '143, 164, 139' // Sage
        } else if (rand < 0.8) {
          this.color = '73, 83, 97' // Slate light
        } else {
          this.color = '255, 255, 255'
        }
        this.opacity = Math.random() * 0.35 + 0.05
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around boundaries
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(${this.color}, ${this.opacity})`
        context.fill()
      }
    }

    const particlesArray: Particle[] = []
    const particlesCount = Math.min(Math.floor((width * height) / 15000), 75)
    for (let i = 0; i < particlesCount; i++) {
      particlesArray.push(new Particle())
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(143, 164, 139, 0.02)'
      ctx.lineWidth = 1
      const gridSize = 60
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw and update particles
      particlesArray.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      // Draw faint lines between close particles
      ctx.lineWidth = 0.5
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const alpha = (1 - distance / 120) * 0.1
            ctx.strokeStyle = `rgba(143, 164, 139, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <header
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--grad-hero)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'var(--nav-h)',
        zIndex: 1
      }}
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Orbs */}
      <div className="blob blob--1" />
      <div className="blob blob--2" style={{ animationDelay: '3s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <style>{`
          .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 4rem;
            align-items: center;
          }
          @media (max-width: 992px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 3rem;
              text-align: center;
            }
            .hero-actions {
              justify-content: center !important;
            }
            .hero-mockup-container {
              max-width: 580px;
              margin: 0 auto;
            }
          }
          .hero-title {
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 1.5rem;
          }
          .hero-subtitle {
            font-size: clamp(1.05rem, 2.5vw, 1.25rem);
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
            max-width: 600px;
          }
          .hero-actions {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            flex-wrap: wrap;
            margin-bottom: 3.5rem;
          }
          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(143, 164, 139, 0.08);
            border: 1px solid var(--border);
            color: var(--accent-light);
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0.45rem 1rem;
            border-radius: var(--radius-full);
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          /* Premium Logo Story Centerpiece */
          .logo-centerpiece-container {
            position: relative;
            display: grid;
            place-items: center;
            height: 420px;
            width: 100%;
            max-width: 460px;
            margin: 0 auto;
          }
          
          @keyframes spin-centered-new {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          @keyframes spin-centered-reverse-new {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          
          @keyframes halo-pulse-new {
            0% {
              transform: scale(0.92);
              opacity: 0.15;
            }
            100% {
              transform: scale(1.08);
              opacity: 0.25;
            }
          }
          
          .logo-centerpiece-glow-ring {
            grid-area: 1 / 1;
            width: 336px;
            height: 336px;
            border-radius: 50%;
            border: 1px dashed rgba(143, 164, 139, 0.25);
            animation: spin-centered-new 35s linear infinite;
            pointer-events: none;
          }
          
          .logo-centerpiece-glow-ring--2 {
            grid-area: 1 / 1;
            width: 396px;
            height: 396px;
            border-radius: 50%;
            border: 1px solid rgba(143, 164, 139, 0.08);
            animation: spin-centered-reverse-new 60s linear infinite;
            pointer-events: none;
          }
          
          .logo-centerpiece-halo {
            grid-area: 1 / 1;
            width: 264px;
            height: 264px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(143, 164, 139, 0.2) 0%, transparent 70%);
            filter: blur(25px);
            pointer-events: none;
            animation: halo-pulse-new 6s ease-in-out infinite alternate;
          }

          /* Floating Story Labels pointing to Logo parts */
          .story-label {
            position: absolute;
            background: rgba(18, 22, 25, 0.85);
            border: 1px solid rgba(143, 164, 139, 0.2);
            backdrop-filter: blur(10px);
            padding: 0.5rem 1rem;
            border-radius: var(--radius-md);
            font-size: 0.78rem;
            max-width: 180px;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
            z-index: 10;
            pointer-events: auto;
          }
          
          .story-label:hover {
            border-color: var(--accent);
            box-shadow: var(--shadow-glow), var(--shadow-lg);
            transform: translateY(-2px);
          }
          
          .story-label-title {
            font-family: var(--font-heading);
            font-weight: 700;
            color: var(--accent-light);
            margin-bottom: 0.15rem;
          }
          
          .story-label-text {
            color: var(--text-secondary);
            font-size: 0.7rem;
            line-height: 1.3;
          }

          .story-label--1 {
            top: 10%;
            left: -5%;
          }
          .story-label--2 {
            bottom: 12%;
            left: -12%;
          }
          .story-label--3 {
            top: 25%;
            right: -10%;
          }
        `}</style>

        <div className="hero-grid">
          {/* Hero Left (Text / CTAs) */}
          <div className="reveal active">
            <div className="hero-badge">
              <Terminal size={14} /> Ingeniería de Software & Cloud
            </div>
            <h1 className="hero-title">
              Software de Calidad.<br />
              <span className="text-gradient">Crecimiento Orgánico.</span>
            </h1>
            <p className="hero-subtitle">
              En Neltuma Labs diseñamos e implementamos arquitecturas digitales robustas,
              aplicaciones web sofisticadas y soluciones móviles premium que impulsan y escalan tu negocio.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-premium btn-premium--accent">
                Agendar Consulta <ArrowRight size={16} />
              </a>
            </div>

            {/* Micro Highlights */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <Server size={16} style={{ color: 'var(--accent)' }} />
                <span>Nativo Cloud & Escalable</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent)' }} />
                <span>Arquitecturas Seguras</span>
              </div>
            </div>
          </div>

          {/* Hero Right (Premium Logo Centerpiece) */}
          <div className="hero-mockup-container reveal active delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="logo-centerpiece-container">
              {/* Outer orbits */}
              <div className="logo-centerpiece-glow-ring" />
              <div className="logo-centerpiece-glow-ring--2" />
              <div className="logo-centerpiece-halo" />

              {/* Center protagonist Logo (Cropped Circle Algarrobo Symbol) */}
              <Logo size={216} showText={false} animated={true} style={{ gridArea: '1 / 1' }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
