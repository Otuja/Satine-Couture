import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>Satine Couture</h3>
            <p className={styles.brandTagline}>
              Luxury women's wear crafted with elegance and precision.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/satine_couture" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
              <a href="https://wa.me/message/M3VJPERGFUAPN1" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Explore</h4>
            <nav className={styles.linkList}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/collections" className={styles.link}>Collections</Link>
              <Link href="/about" className={styles.link}>About</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Services</h4>
            <nav className={styles.linkList}>
              <span className={styles.link}>Bridal Wear</span>
              <span className={styles.link}>Bespoke Design</span>
              <span className={styles.link}>Traditional Wear</span>
              <span className={styles.link}>Ready-to-Wear</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Get in Touch</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:info.satinecouture@gmail.com" className={styles.contactLink}>
                info.satinecouture@gmail.com
              </a>
              <p className={styles.contactText}>By Appointment Only</p>
              <p className={styles.contactText}>Worldwide Shipping</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Satine Couture. All rights reserved.
          </p>
          <div className={styles.credits}>
            <span className={styles.creditText}>Crafted with excellence</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
