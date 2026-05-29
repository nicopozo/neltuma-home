import { useState, useEffect } from 'react'
import Logo from './Logo'
import { Menu, X, ChevronDown, Cpu, Smartphone, Cloud, PenTool } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-h)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: scrolled ? 'rgba(12, 14, 16, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(143, 164, 139, 0.15)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo size={52} />
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="desktop-menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            <style>{`
              @media (max-width: 968px) {
                .desktop-menu { display: none !important; }
                .hamburger-btn { display: flex !important; }
              }
              .nav-link {
                font-size: 0.92rem;
                font-weight: 500;
                color: var(--text-secondary);
                padding: 0.5rem 0.9rem;
                border-radius: var(--radius-sm);
                transition: all 0.3s ease;
                display: flex;
                alignItems: center;
                gap: 0.25rem;
              }
              .nav-link:hover, .nav-link.active {
                color: var(--accent-light);
                background: rgba(143, 164, 139, 0.05);
              }
              .dropdown-container {
                position: relative;
              }
              .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%) translateY(10px);
                opacity: 0;
                visibility: hidden;
                padding-top: 0.75rem;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 100;
              }
              .dropdown-container:hover .dropdown-menu,
              .dropdown-menu.open {
                opacity: 1;
                visibility: visible;
                transform: translateX(-50%) translateY(0);
              }
              .dropdown-inner {
                background: var(--bg-card);
                border: 1px solid var(--border-hover);
                border-radius: var(--radius-md);
                min-width: 280px;
                padding: 0.75rem;
                box-shadow: var(--shadow-lg);
              }
              .dropdown-item {
                display: flex;
                align-items: center;
                gap: 0.85rem;
                padding: 0.75rem 1rem;
                font-size: 0.88rem;
                color: var(--text-secondary);
                border-radius: var(--radius-sm);
                transition: all 0.2s ease;
              }
              .dropdown-item:hover {
                background: rgba(143, 164, 139, 0.08);
                color: var(--text-primary);
                transform: translateX(3px);
              }
              .dropdown-item-icon {
                color: var(--accent);
                display: flex;
                align-items: center;
              }
              .hamburger-btn {
                display: none;
                align-items: center;
                justify-content: center;
                color: var(--text-primary);
                cursor: pointer;
                padding: 0.5rem;
                border-radius: var(--radius-sm);
                background: rgba(47, 54, 63, 0.2);
              }
              .mobile-drawer {
                display: none;
                position: fixed;
                top: var(--nav-h);
                left: 0;
                right: 0;
                background: rgba(12, 14, 16, 0.98);
                backdrop-filter: blur(20px);
                border-bottom: 1px solid var(--border);
                padding: 1.5rem 2rem;
                z-index: 999;
                transform: translateY(-20px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
              }
              .mobile-drawer.open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
                display: block;
              }
              .mobile-link {
                display: block;
                padding: 0.85rem 1rem;
                color: var(--text-secondary);
                font-size: 1.05rem;
                border-radius: var(--radius-sm);
                transition: all 0.3s ease;
                border-bottom: 1px solid rgba(255, 255, 255, 0.02);
              }
              .mobile-link:hover {
                background: rgba(143, 164, 139, 0.08);
                color: var(--accent-light);
              }
            `}</style>

            <a href="#home" className="nav-link">Inicio</a>
            
            <div className="dropdown-container">
              <a 
                href="#services" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Servicios <ChevronDown size={14} style={{ marginTop: '1px' }} />
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-inner">
                  <a href="#services-custom" className="dropdown-item">
                    <span className="dropdown-item-icon"><Cpu size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Software a Medida</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Soluciones de ingeniería escalables</div>
                    </div>
                  </a>
                  <a href="#services-mobile" className="dropdown-item">
                    <span className="dropdown-item-icon"><Smartphone size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Aplicaciones Móviles</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Experiencias premium iOS & Android</div>
                    </div>
                  </a>
                  <a href="#services-saas" className="dropdown-item">
                    <span className="dropdown-item-icon"><Cloud size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Arquitectura SaaS & Cloud</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Plataformas cloud nativas optimizadas</div>
                    </div>
                  </a>
                  <a href="#services-ux" className="dropdown-item">
                    <span className="dropdown-item-icon"><PenTool size={18} /></span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Diseño de UI/UX Premium</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Interfaces refinadas e interactivas</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#methodology" className="nav-link">Metodología</a>

            <a href="#stats" className="nav-link">Valores</a>
            <a href="#contact" className="btn-premium btn-premium--outline" style={{ padding: '0.45rem 1.2rem', fontSize: '0.88rem', marginLeft: '0.5rem' }}>
              Consultar
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-link" onClick={() => setMobileOpen(false)}>Inicio</a>
        <a href="#services" className="mobile-link" onClick={() => setMobileOpen(false)}>Servicios</a>
        <a href="#methodology" className="mobile-link" onClick={() => setMobileOpen(false)}>Metodología</a>

        <a href="#stats" className="mobile-link" onClick={() => setMobileOpen(false)}>Valores</a>
        <a
          href="#contact"
          className="btn-premium btn-premium--accent"
          style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem', padding: '0.75rem' }}
          onClick={() => setMobileOpen(false)}
        >
          Agendar Consulta
        </a>
      </div>
    </>
  )
}
