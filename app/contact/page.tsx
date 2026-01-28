import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import styles from './page.module.css'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={`${styles.title} slide-down`}>Get In Touch</h1>
            <p className={`${styles.subtitle} fade-in`}>
              Ready to create something extraordinary? Book an appointment with us today.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className={styles.content}>
          <div className="container">
            <div className={styles.grid}>
              {/* Contact Info */}
              <div className={`${styles.info} slide-in-left`}>
                <h2 className={styles.infoTitle}>Contact Information</h2>
                <p className={styles.infoText}>
                  We work by appointment only to ensure each client receives our undivided 
                  attention. Fill out the form or reach us directly through the channels below.
                </p>

                <div className={styles.contactDetails}>
                  <div className={`${styles.contactItem} fade-in-scale`} style={{ animationDelay: '0.1s' }}>
                    <div className={styles.icon}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className={styles.contactLabel}>Email</h4>
                      <a href="mailto:info.satinecouture@gmail.com" className={styles.contactLink}>
                        info.satinecouture@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className={`${styles.contactItem} fade-in-scale`} style={{ animationDelay: '0.2s' }}>
                    <div className={styles.icon}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className={styles.contactLabel}>WhatsApp</h4>
                      <a 
                        href="https://wa.me/message/M3VJPERGFUAPN1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className={`${styles.contactItem} fade-in-scale`} style={{ animationDelay: '0.3s' }}>
                    <div className={styles.icon}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className={styles.contactLabel}>Location</h4>
                      <p className={styles.contactText}>
                        We ship worldwide
                      </p>
                    </div>
                  </div>

                  <div className={`${styles.contactItem} fade-in-scale`} style={{ animationDelay: '0.4s' }}>
                    <div className={styles.icon}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className={styles.contactLabel}>Appointments</h4>
                      <p className={styles.contactText}>
                        By appointment only<br />
                        Monday - Saturday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${styles.social} fade-in`}>
                  <h3 className={styles.socialTitle}>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    <a 
                      href="https://instagram.com/satine_couture" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <span className={styles.socialIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </span>
                      Instagram
                    </a>
                    <a 
                      href="https://wa.me/message/M3VJPERGFUAPN1" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <span className={styles.socialIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`${styles.formWrapper} slide-in-right`}>
                <h2 className={styles.formTitle}>Book an Appointment</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
