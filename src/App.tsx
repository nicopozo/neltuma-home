import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Methodology from './components/Methodology'
import Stats from './components/Stats'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Logo from './components/Logo'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll reveal trigger hook
  useEffect(() => {
    // Hide page loader after 800ms
    const loaderTimer = setTimeout(() => {
      setLoading(false)
    }, 850)

    // Intersection observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully appears
      }
    )

    revealElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      clearTimeout(loaderTimer)
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [loading])


  return (
    <Routes>
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/" element={
        <>
          {/* Premium custom page loader */}
          <div className={`page-loader ${!loading ? 'loaded' : ''}`}>
            <div className="loader-content">
              <div className="loader-spinner" />
              <Logo size={50} showText={true} animated={false} />
            </div>
          </div>

          {/* Back to top float button */}
          <style>{`
            .back-to-top-btn {
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: rgba(12, 14, 16, 0.8);
              border: 1px solid var(--border);
              color: var(--accent-light);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.1rem;
              backdrop-filter: blur(10px);
              box-shadow: var(--shadow-md);
              z-index: 99;
              opacity: 0;
              visibility: hidden;
              transition: all var(--duration) var(--ease);
            }
            .back-to-top-btn.visible {
              opacity: 1;
              visibility: visible;
            }
            .back-to-top-btn:hover {
              background: var(--accent);
              color: var(--bg-darkest);
              border-color: var(--accent);
              transform: translateY(-3px);
            }
          `}</style>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="backToTop"
            className={`back-to-top-btn ${showScrollTop ? 'visible' : ''}`}
            aria-label="Volver arriba"
          >
            ↑
          </button>

          {/* App Layout */}
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Methodology />
            <Stats />
            <ContactForm />
          </main>
          <Footer />
        </>
      } />
    </Routes>
  )
}
