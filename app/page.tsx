import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import CollectionGrid, { Collection } from '@/components/CollectionGrid'
import StatsCounter from '@/components/StatsCounter'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import styles from './page.module.css'

const featuredCollections: Collection[] = [
  {
    id: '1',
    title: 'Bridal Elegance',
    category: 'Bridal',
    image: '/images/collection-bridal-01.jpg',
    description: 'Exquisite wedding gowns crafted with intricate details',
    slug: 'bridal-elegance'
  },
  {
    id: '2',
    title: 'Traditional Royalty',
    category: 'Traditional',
    image: '/images/collection-traditional-01.jpg',
    description: 'Luxurious African traditional wear with modern sophistication',
    slug: 'traditional-royalty'
  },
  {
    id: '3',
    title: 'Bespoke Evening',
    category: 'Bespoke',
    image: '/images/collection-bespoke-01.jpg',
    description: 'Custom-designed evening wear for special occasions',
    slug: 'bespoke-evening'
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero
          title="Satine Couture"
          subtitle="Luxe Women's Wear • Bridal • Bespoke • Ready-to-Wear"
          ctaText="Explore Collections"
          ctaLink="/collections"
          backgroundImage="/images/hero-background.jpg"
        />

        {/* Featured Collections */}
        <section className={styles.featured}>
          <div className="container">
            <div className={`${styles.sectionHeader} slide-up`}>
              <h2 className={styles.sectionTitle}>Featured Collections</h2>
              <p className={styles.sectionSubtitle}>
                Discover our curated selection of luxury fashion pieces
              </p>
            </div>
            <CollectionGrid collections={featuredCollections} />
            <div className={`${styles.viewAll} fade-in-scale`}>
              <Link href="/collections" className="btn btn-outline">
                View All Collections
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className={styles.story}>
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={`${styles.storyContent} slide-in-left`}>
                <h2 className={styles.storyTitle}>
                  Crafting Excellence Since Day One
                </h2>
                <p className={styles.storyText}>
                  At Satine Couture, we believe every woman deserves to feel extraordinary. 
                  Our luxury women's wear brand specializes in creating breathtaking bridal gowns, 
                  bespoke designs, and ready-to-wear pieces that celebrate elegance and individuality.
                </p>
                <p className={styles.storyText}>
                  Each piece is meticulously crafted with attention to detail, using the finest 
                  fabrics and embellishments. From intricate beadwork to flowing silhouettes, 
                  our designs are a testament to timeless beauty and modern sophistication.
                </p>
                <Link href="/about" className="btn btn-primary">
                  Our Story
                </Link>
              </div>
              <div className={`${styles.storyImage} slide-in-right`}>
                <img src="/images/about-story.jpg" alt="Satine Couture craftsmanship" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={styles.services}>
          <div className="container">
            <h2 className={`${styles.servicesTitle} slide-up`}>Our Services</h2>
            <div className={styles.servicesGrid}>
              <div className={`${styles.serviceCard} fade-in-scale`} style={{ animationDelay: '0.1s' }}>
                <div className={styles.serviceIcon}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M12 14l-2 2-2-2"></path>
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Bridal Wear</h3>
                <p className={styles.serviceDescription}>
                  Stunning wedding gowns and bridal accessories designed to make your special day unforgettable.
                </p>
              </div>
              <div className={`${styles.serviceCard} fade-in-scale`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.serviceIcon}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Bespoke Design</h3>
                <p className={styles.serviceDescription}>
                  Custom-tailored pieces created exclusively for you, bringing your vision to life.
                </p>
              </div>
              <div className={`${styles.serviceCard} fade-in-scale`} style={{ animationDelay: '0.3s' }}>
                <div className={styles.serviceIcon}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Traditional Wear</h3>
                <p className={styles.serviceDescription}>
                  Luxurious African traditional attire with contemporary elegance and craftsmanship.
                </p>
              </div>
              <div className={`${styles.serviceCard} fade-in-scale`} style={{ animationDelay: '0.4s' }}>
                <div className={styles.serviceIcon}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Ready-to-Wear</h3>
                <p className={styles.serviceDescription}>
                  Curated collection of sophisticated pieces for the modern, fashion-forward woman.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Counter */}
        <StatsCounter />

        {/* Testimonials */}
        <Testimonials />

        {/* Instagram Text Section */}
        <section className={styles.instagram}>
          <div className="container">
            <div className={styles.instagramContent}>
              <h2 className={styles.instagramTitle}>Follow Our Journey</h2>
              <p className={styles.instagramText}>
                Stay connected with Satine Couture on Instagram for the latest designs, 
                behind-the-scenes moments, and style inspiration.
              </p>
              <a 
                href="https://instagram.com/satine_couture" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.instagramHandle}
              >
                @satine_couture
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container">
            <div className={`${styles.ctaContent} scale-in`}>
              <h2 className={styles.ctaTitle}>Ready to Create Something Extraordinary?</h2>
              <p className={styles.ctaText}>
                Book an appointment with us and let's bring your fashion vision to life. 
                We ship worldwide and work by appointment only.
              </p>
              <Link href="/contact" className="btn btn-primary glow">
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
