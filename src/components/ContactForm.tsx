import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Software a Medida',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El formato del correo electrónico no es válido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio'
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Describe tu proyecto con un poco más de detalle (mínimo 15 caracteres)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        projectType: 'Software a Medida',
        message: ''
      })
    }, 1500)
  }

  return (
    <section id="contact" className="section section--darkest">
      <div className="organic-bg">
        <div className="blob blob--1" style={{ bottom: '-10%', right: '10%', background: 'var(--accent-glow)' }} />
      </div>

      <div className="container container--sm" style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          .form-group {
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .form-label {
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--text-primary);
          }
          .form-input, .form-select, .form-textarea {
            width: 100%;
            background: rgba(12, 14, 16, 0.6);
            border: 1px solid var(--border-card);
            border-radius: var(--radius-md);
            padding: 0.85rem 1.1rem;
            font-size: 0.95rem;
            color: var(--text-primary);
            transition: all var(--duration) var(--ease);
            outline: none;
          }
          .form-input:focus, .form-select:focus, .form-textarea:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(143, 164, 139, 0.15);
            background: rgba(12, 14, 16, 0.8);
          }
          .form-error-msg {
            color: #FF8A80;
            font-size: 0.78rem;
            display: flex;
            align-items: center;
            gap: 0.35rem;
            margin-top: 0.25rem;
          }
          .form-input.has-error, .form-textarea.has-error {
            border-color: #FF8A80;
          }
        `}</style>

        {/* Section Header */}
        <div className="section-header reveal active">
          <span className="badge">Contacto Directo</span>
          <h2>
            Construyamos el <br />
            <span className="text-gradient">Futuro de tu Plataforma</span>
          </h2>
          <p>
            Cuéntanos la visión de tu proyecto. Un ingeniero senior analizará tus requerimientos 
            para diseñar una propuesta técnica óptima.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card reveal active" style={{ padding: '3.5rem 3rem' }}>
          {isSubmitted ? (
            /* Success State screen */
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ color: 'var(--accent)', display: 'inline-flex', marginBottom: '1.5rem' }}>
                <CheckCircle size={56} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                ¡Consulta Recibida!
              </h3>
              <p style={{ maxWidth: '480px', margin: '0 auto 2rem', fontSize: '1.02rem', lineHeight: 1.7 }}>
                Tu solicitud ha sido registrada correctamente. Uno de nuestros ingenieros principales 
                analizará tus datos y te responderá en las próximas 24 horas.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-premium btn-premium--outline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1: Name and Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: '' })
                    }}
                  />
                  {errors.name && (
                    <span className="form-error-msg"><AlertCircle size={12} /> {errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    placeholder="ejemplo@neltuma.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: '' })
                    }}
                  />
                  {errors.email && (
                    <span className="form-error-msg"><AlertCircle size={12} /> {errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Project Type */}
              <div className="form-group" style={{ marginTop: '0.5rem' }}>
                <label htmlFor="projectType" className="form-label">Tipo de Proyecto</label>
                <select
                  id="projectType"
                  className="form-select"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="Software a Medida">Software a Medida</option>
                  <option value="Aplicación Móvil">Aplicación Móvil</option>
                  <option value="SaaS / Producto Cloud">SaaS / Producto Cloud</option>
                  <option value="UI/UX & Rediseño">UI/UX & Rediseño</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-group" style={{ marginTop: '0.5rem' }}>
                <label htmlFor="message" className="form-label">Cuéntanos sobre tu visión</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                  placeholder="Detalla los requisitos principales, integraciones necesarias y objetivos de tu software..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value })
                    if (errors.message) setErrors({ ...errors, message: '' })
                  }}
                />
                {errors.message && (
                  <span className="form-error-msg"><AlertCircle size={12} /> {errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium btn-premium--accent"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: '1.5rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <span>Enviando solicitud...</span>
                ) : (
                  <>
                    Enviar Solicitud <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
