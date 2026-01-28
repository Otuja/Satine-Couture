'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './Hero.module.css'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  backgroundVideo?: string
  backgroundImage?: string
}

export default function Hero({ 
  title, 
  subtitle, 
  ctaText = 'View Collections',
  ctaLink = '/collections',
  backgroundVideo,
  backgroundImage = '/images/hero-bg.jpg'
}: HeroProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxOffset = scrolled * 0.5
      document.documentElement.style.setProperty('--parallax-offset', `${parallaxOffset}px`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background Media */}
      {backgroundVideo ? (
        <video 
          className={styles.backgroundVideo}
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div 
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'top center' }}
        />
      )}

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h1 className={`${styles.title} slide-down`}>{title}</h1>
        <p className={`${styles.subtitle} slide-up`}>{subtitle}</p>
        <Link href={ctaLink} className={`${styles.cta} scale-in`}>
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
