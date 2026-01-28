'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionGrid, { Collection } from '@/components/CollectionGrid'
import ImageSlider from '@/components/ImageSlider'
import styles from './page.module.css'

const allCollections: Collection[] = [
  {
    id: '1',
    title: 'Bridal Elegance',
    category: 'Bridal',
    image: '/images/collection-bridal-01.jpg',
    description: 'Exquisite wedding gowns with intricate lace and beadwork',
    slug: 'bridal-elegance'
  },
  {
    id: '2',
    title: 'Bridal Dreams',
    category: 'Bridal',
    image: '/images/collection-bridal-02.jpg',
    description: 'Timeless bridal designs for your special day',
    slug: 'bridal-dreams'
  },
  {
    id: '3',
    title: 'Traditional Royalty',
    category: 'Traditional',
    image: '/images/collection-traditional-01.jpg',
    description: 'Luxurious aso-ebi and traditional wear',
    slug: 'traditional-royalty'
  },
  {
    id: '4',
    title: 'Emerald Majesty',
    category: 'Traditional',
    image: '/images/collection-traditional-02.jpg',
    description: 'Regal traditional attire with gold embellishments',
    slug: 'emerald-majesty'
  },
  {
    id: '5',
    title: 'Heritage Elegance',
    category: 'Traditional',
    image: '/images/collection-traditional-03.jpg',
    description: 'Contemporary African fashion with traditional roots',
    slug: 'heritage-elegance'
  },
  {
    id: '6',
    title: 'Bespoke Evening',
    category: 'Bespoke',
    image: '/images/collection-bespoke-01.jpg',
    description: 'Custom evening gowns for special occasions',
    slug: 'bespoke-evening'
  },
  {
    id: '7',
    title: 'Tailored Sophistication',
    category: 'Bespoke',
    image: '/images/collection-bespoke-02.jpg',
    description: 'Elegant custom designs with statement details',
    slug: 'tailored-sophistication'
  },
  {
    id: '8',
    title: 'Contemporary Chic',
    category: 'Ready-to-Wear',
    image: '/images/collection-rtw-01.jpg',
    description: 'Modern ready-to-wear pieces',
    slug: 'contemporary-chic'
  },
  {
    id: '9',
    title: 'Power Dressing',
    category: 'Ready-to-Wear',
    image: '/images/collection-rtw-02.jpg',
    description: 'Sophisticated pantsuits and separates',
    slug: 'power-dressing'
  }
]

const sliderImages = [
  { src: '/images/collection-bridal-01.jpg', alt: 'Bridal Collection', title: 'Bridal Elegance' },
  { src: '/images/collection-traditional-01.jpg', alt: 'Traditional Collection', title: 'Traditional Royalty' },
  { src: '/images/collection-bespoke-01.jpg', alt: 'Bespoke Collection', title: 'Bespoke Evening' },
  { src: '/images/collection-rtw-01.jpg', alt: 'Ready-to-Wear Collection', title: 'Contemporary Chic' },
  { src: '/images/collection-bridal-02.jpg', alt: 'Bridal Dreams', title: 'Bridal Dreams' },
  { src: '/images/collection-traditional-02.jpg', alt: 'Emerald Majesty', title: 'Emerald Majesty' },
]

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Bridal', 'Traditional', 'Bespoke', 'Ready-to-Wear']

  const filteredCollections = selectedCategory === 'All'
    ? allCollections
    : allCollections.filter(c => c.category === selectedCategory)

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section with Parallax */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <div className="container">
              <span className={`${styles.heroLabel} fade-in`}>Discover</span>
              <h1 className={`${styles.title} slide-down`}>Our Collections</h1>
              <p className={`${styles.subtitle} fade-in`}>
                Curated pieces that celebrate elegance, craftsmanship, and timeless beauty
              </p>
              <div className={styles.heroStats}>
                <div className={`${styles.stat} fade-in-scale`} style={{ animationDelay: '0.2s' }}>
                  <span className={styles.statNumber}>9</span>
                  <span className={styles.statLabel}>Collections</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={`${styles.stat} fade-in-scale`} style={{ animationDelay: '0.3s' }}>
                  <span className={styles.statNumber}>150+</span>
                  <span className={styles.statLabel}>Designs</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={`${styles.stat} fade-in-scale`} style={{ animationDelay: '0.4s' }}>
                  <span className={styles.statNumber}>4</span>
                  <span className={styles.statLabel}>Categories</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Slider Showcase */}
        <section className={styles.sliderSection}>
          <div className="container">
            <div className={styles.sliderHeader}>
              <h2 className={`${styles.sliderTitle} slide-up`}>Featured Designs</h2>
              <p className={`${styles.sliderSubtitle} fade-in`}>
                Explore our signature pieces that define luxury and elegance
              </p>
            </div>
            <div className="fade-in-scale">
              <ImageSlider images={sliderImages} autoPlay={true} interval={4000} />
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <div className="container">
            <div className={styles.filterWrapper}>
              <h3 className={styles.filterTitle}>Filter by Category</h3>
              <div className={`${styles.filterButtons} slide-up`}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''} fade-in-scale`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className={styles.collections}>
          <div className="container">
            <div className={styles.collectionCount}>
              <span>{filteredCollections.length} {filteredCollections.length === 1 ? 'Collection' : 'Collections'}</span>
            </div>
            <CollectionGrid collections={filteredCollections} />
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Can't Find What You're Looking For?</h2>
              <p className={styles.ctaText}>
                Our bespoke service allows us to create custom pieces tailored exclusively to your vision.
              </p>
              <a href="/contact" className="btn btn-primary glow">
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
