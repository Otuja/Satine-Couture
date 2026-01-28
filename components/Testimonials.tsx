'use client'

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amara Johnson',
    role: 'Bride',
    image: '/images/testimonial-01.jpg',
    text: 'Working with Satine Couture was an absolute dream. The attention to detail, the exquisite craftsmanship, and the personalized service made my wedding day truly magical. My gown was a masterpiece.',
    rating: 5
  },
  {
    id: 2,
    name: 'Chioma Okafor',
    role: 'Fashion Enthusiast',
    image: '/images/testimonial-02.jpg',
    text: 'The bespoke service is unmatched. They listened to my vision and created something beyond my wildest dreams. Every stitch, every detail was perfection. Truly exceptional artistry.',
    rating: 5
  },
  {
    id: 3,
    name: 'Zainab Mohammed',
    role: 'Corporate Executive',
    image: '/images/testimonial-03.jpg',
    text: 'Their ready-to-wear collection is perfect for the modern professional. Quality, elegance, and sophistication in every piece. I always feel confident and beautiful in Satine Couture.',
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex, isPaused])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const current = testimonials[currentIndex]

  return (
    <section 
      className={styles.testimonials}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Hear from those who have experienced the Satine Couture difference
          </p>
        </div>

        <div className={styles.testimonialWrapper}>
          <div className={styles.card}>
            <div className={styles.quoteIcon}>"</div>
            
            <div className={styles.rating}>
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>

            <p className={styles.text}>{current.text}</p>

            <div className={styles.author}>
              <div className={styles.avatarWrapper}>
                <img src={current.image} alt={current.name} className={styles.avatar} />
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.name}>{current.name}</h4>
                <p className={styles.role}>{current.role}</p>
              </div>
            </div>
          </div>

          <div className={styles.navigation}>
            <button onClick={prevSlide} className={styles.navButton} aria-label="Previous">
              ←
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className={styles.navButton} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
