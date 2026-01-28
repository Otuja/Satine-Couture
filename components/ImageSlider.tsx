'use client'

import { useState, useEffect } from 'react'
import styles from './ImageSlider.module.css'

interface SliderImage {
  src: string
  alt: string
  title?: string
}

interface ImageSliderProps {
  images: SliderImage[]
  autoPlay?: boolean
  interval?: number
}

export default function ImageSlider({ images, autoPlay = true, interval = 5000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, autoPlay, interval])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''} ${
              index === (currentIndex - 1 + images.length) % images.length ? styles.prev : ''
            } ${index === (currentIndex + 1) % images.length ? styles.next : ''}`}
          >
            <img src={image.src} alt={image.alt} className={styles.image} />
            {image.title && (
              <div className={styles.slideTitle}>
                <h3>{image.title}</h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}
