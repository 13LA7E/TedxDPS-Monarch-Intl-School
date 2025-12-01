'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const basePath = process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School' : '';

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="brand">
            <img 
              src={`${basePath}/logo-removebg-preview.webp`} 
              alt="TEDxDPS Monarch Youth" 
              style={{height: '60px', width: 'auto'}}
            />
            <img 
              src={`${basePath}/logo-white.webp`} 
              alt="TEDxDPS Monarch Youth" 
              style={{height: '60px', width: 'auto', marginLeft: '8px'}}
            />
          </div>
          <nav>
            <ul>
              <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link href="/speakers" className={pathname === '/speakers' ? 'active' : ''}>Speakers</Link></li>
              <li><Link href="/schedule" className={pathname === '/schedule' ? 'active' : ''}>Schedule</Link></li>
              <li><Link href="/gallery" className={pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
              <li><Link href="/sponsors" className={pathname === '/sponsors' ? 'active' : ''}>Sponsors</Link></li>
              <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
          </nav>
          <Link href="/apply" className="register" aria-label="Register">Register</Link>
          <button 
            className={`menu-btn ${menuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      
      {/* Mobile Side Menu */}
      {menuOpen && <div className="nav-overlay active" onClick={() => setMenuOpen(false)}></div>}
      <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/speakers" className={pathname === '/speakers' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Speakers</Link></li>
          <li><Link href="/schedule" className={pathname === '/schedule' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Schedule</Link></li>
          <li><Link href="/gallery" className={pathname === '/gallery' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link href="/sponsors" className={pathname === '/sponsors' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Sponsors</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link href="/apply" className="mobile-register" onClick={() => setMenuOpen(false)}>Register Now</Link></li>
        </ul>
      </nav>
    </>
  )
}
