import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={`${styles.title} slide-down`}>About Satine Couture</h1>
            <p className={`${styles.tagline} fade-in`}>Where Elegance Meets Craftsmanship</p>
          </div>
        </section>

        {/* Brand Story */}
        <section className={styles.story}>
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={`${styles.storyImage} slide-in-left`}>
                <img src="/images/about-story.jpg" alt="Satine Couture" />
              </div>
              <div className={`${styles.storyContent} slide-in-right`}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p className={styles.text}>
                  Satine Couture was born from a passion for creating extraordinary fashion experiences. 
                  Founded by Satine By Oma, our brand represents the perfect fusion of traditional 
                  African elegance and contemporary luxury design.
                </p>
                <p className={styles.text}>
                  Every piece we create tells a story of meticulous craftsmanship, attention to detail, 
                  and an unwavering commitment to making every woman feel exceptional. From the initial 
                  sketch to the final stitch, we pour our hearts into creating garments that transcend 
                  mere clothing to become works of art.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.mission}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={`${styles.missionCard} fade-in-scale`} style={{ animationDelay: '0.1s' }}>
                <h3 className={styles.cardTitle}>Our Mission</h3>
                <p className={styles.cardText}>
                  To empower women through exceptional fashion that celebrates their unique beauty, 
                  confidence, and individuality. We create luxury pieces that make every moment 
                  unforgettable.
                </p>
              </div>
              <div className={`${styles.missionCard} fade-in-scale`} style={{ animationDelay: '0.2s' }}>
                <h3 className={styles.cardTitle}>Our Vision</h3>
                <p className={styles.cardText}>
                  To be the premier destination for luxury women's wear in Africa and beyond, 
                  renowned for our exquisite craftsmanship, innovative designs, and exceptional 
                  customer experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className={styles.services}>
          <div className="container">
            <h2 className={`${styles.servicesTitle} slide-up`}>What We Do</h2>
            <div className={styles.servicesGrid}>
              <div className={`${styles.serviceItem} slide-in-left`} style={{ animationDelay: '0.1s' }}>
                <div className={styles.serviceNumber}>01</div>
                <h3 className={styles.serviceTitle}>Bridal Couture</h3>
                <p className={styles.serviceText}>
                  We specialize in creating breathtaking bridal gowns that make your wedding day 
                  truly magical. Each dress is crafted with the finest fabrics, intricate beadwork, 
                  and attention to every detail.
                </p>
              </div>
              <div className={`${styles.serviceItem} slide-in-right`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.serviceNumber}>02</div>
                <h3 className={styles.serviceTitle}>Bespoke Design</h3>
                <p className={styles.serviceText}>
                  Our bespoke service brings your fashion dreams to life. We work closely with you 
                  to create custom pieces that perfectly reflect your style, personality, and vision.
                </p>
              </div>
              <div className={`${styles.serviceItem} slide-in-left`} style={{ animationDelay: '0.3s' }}>
                <div className={styles.serviceNumber}>03</div>
                <h3 className={styles.serviceTitle}>Traditional Wear</h3>
                <p className={styles.serviceText}>
                  Celebrating African heritage with contemporary flair, our traditional wear 
                  collection features luxurious fabrics, intricate embroidery, and timeless designs.
                </p>
              </div>
              <div className={`${styles.serviceItem} slide-in-right`} style={{ animationDelay: '0.4s' }}>
                <div className={styles.serviceNumber}>04</div>
                <h3 className={styles.serviceTitle}>Ready-to-Wear</h3>
                <p className={styles.serviceText}>
                  Our curated ready-to-wear collection offers sophisticated pieces for the modern 
                  woman who values quality, style, and versatility in her wardrobe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.values}>
          <div className="container">
            <h2 className={`${styles.valuesTitle} slide-up`}>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={`${styles.valueCard} fade-in-scale`} style={{ animationDelay: '0.1s' }}>
                <h4 className={styles.valueTitle}>Excellence</h4>
                <p className={styles.valueText}>
                  We never compromise on quality, ensuring every piece meets the highest standards 
                  of craftsmanship.
                </p>
              </div>
              <div className={`${styles.valueCard} fade-in-scale`} style={{ animationDelay: '0.2s' }}>
                <h4 className={styles.valueTitle}>Innovation</h4>
                <p className={styles.valueText}>
                  We blend traditional techniques with modern design to create unique, contemporary pieces.
                </p>
              </div>
              <div className={`${styles.valueCard} fade-in-scale`} style={{ animationDelay: '0.3s' }}>
                <h4 className={styles.valueTitle}>Authenticity</h4>
                <p className={styles.valueText}>
                  We stay true to our African roots while embracing global fashion trends and influences.
                </p>
              </div>
              <div className={`${styles.valueCard} fade-in-scale`} style={{ animationDelay: '0.4s' }}>
                <h4 className={styles.valueTitle}>Personalization</h4>
                <p className={styles.valueText}>
                  Every client receives individual attention and customized service tailored to their needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
