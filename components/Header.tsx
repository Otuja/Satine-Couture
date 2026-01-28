'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoWrapper}>
              <span className={styles.logoMain}>Satine</span>
              <span className={styles.logoDot}>.</span>
              <span className={styles.logoSub}>Couture</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/collections" className={styles.navLink}>Collections</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
            <span className={styles.navNumber}>01</span>
            <span className={styles.navText}>Home</span>
          </Link>
          <Link href="/collections" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
            <span className={styles.navNumber}>02</span>
            <span className={styles.navText}>Collections</span>
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
            <span className={styles.navNumber}>03</span>
            <span className={styles.navText}>About</span>
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
            <span className={styles.navNumber}>04</span>
            <span className={styles.navText}>Contact</span>
          </Link>
        </nav>

        {/* Social Icons - Mobile Only */}
        <div className={styles.mobileSocial}>
          <a 
            href="https://instagram.com/satine_couture" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://wa.me/message/M3VJPERGFUAPN1" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
          <a 
            href="mailto:info.satinecouture@gmail.com" 
            className={styles.socialIcon}
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a 
            href="tel:+2348000000000" 
            className={styles.socialIcon}
            aria-label="Phone"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
