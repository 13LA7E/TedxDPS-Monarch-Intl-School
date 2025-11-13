'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const basePath = process.env.NODE_ENV === 'production' ? '/TedxDPS-Monarch-Intl-School' : '';

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="brand">
            <img src={`${basePath}/logo-removebg-preview.webp`} alt="TEDxDPS Monarch Youth" style={{height: '60px', width: 'auto'}} />
            <img src={`${basePath}/logo-white.webp`} alt="TEDxDPS Monarch Youth" style={{height: '60px', width: 'auto', marginLeft: '8px'}} />
          </div>
          <nav className={menuOpen ? 'active' : ''}>
            <ul>
              <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link href="/speakers" className={pathname === '/speakers' ? 'active' : ''}>Speakers</Link></li>
              <li><Link href="/schedule" className={pathname === '/schedule' ? 'active' : ''}>Schedule</Link></li>
              <li><Link href="/gallery" className={pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
              <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
          </nav>
          <Link href="/apply" className="register" aria-label="Register">Register</Link>
          <button 
            className="menu-btn" 
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      {menuOpen && <div className="nav-overlay active" onClick={() => setMenuOpen(false)}></div>}
    </>
  )
}
