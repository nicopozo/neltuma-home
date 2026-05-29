import React from 'react'
import logoPng from '@/assets/logo_centered.png'

interface LogoProps {
  className?: string
  size?: number
  showText?: boolean
  animated?: boolean
  style?: React.CSSProperties
}

export default function Logo({
  className = '',
  size = 46,
  showText = true,
  animated = true,
  style = {}
}: LogoProps) {
  return (
    <div
      className={`logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        ...style
      }}
    >
      <style>{`
        .logo-symbol-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          padding: 0;
          box-sizing: border-box;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          /* Perfect balance to make the brand colors look rich and bright on dark theme */
          filter: brightness(1.15) contrast(1.05) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Premium hover effects: smooth scale and organic sage glow */
        .logo-symbol-wrapper:hover {
          transform: scale(1.08);
        }

        .logo-symbol-wrapper:hover .logo-image {
          filter: brightness(1.3) contrast(1.1) drop-shadow(0 0 14px rgba(143, 164, 139, 0.6));
          transform: rotate(3deg);
        }

        /* Premium organic ambient pulse if animated is true */
        .logo-ambient-animated {
          animation: logo-ambient-glow 8s ease-in-out infinite alternate;
        }

        @keyframes logo-ambient-glow {
          0% {
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 4px rgba(143, 164, 139, 0.05));
          }
          100% {
            filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 12px rgba(143, 164, 139, 0.25));
          }
        }
      `}</style>
      
      <div 
        className="logo-symbol-wrapper"
        style={{ 
          width: size, 
          height: size 
        }}
      >
        <img
          src={logoPng}
          alt="Neltuma Labs Symbol"
          className={`logo-image ${animated ? 'logo-ambient-animated' : ''}`}
        />
      </div>

      {showText && (
        <span
          className="site-title-text"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: `${size * 0.42}px`,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Neltuma
          <span style={{ color: 'var(--accent)', fontWeight: 400, marginLeft: '0.25rem' }}>
            Labs
          </span>
        </span>
      )}
    </div>
  )
}


