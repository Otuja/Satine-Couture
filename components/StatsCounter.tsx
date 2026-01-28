'use client'

import { useEffect, useState } from 'react'
import styles from './StatsCounter.module.css'

interface Stat {
  number: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { number: 500, label: 'Happy Clients', suffix: '+' },
  { number: 1000, label: 'Designs Created', suffix: '+' },
  { number: 15, label: 'Years Experience', suffix: '+' },
  { number: 98, label: 'Satisfaction Rate', suffix: '%' }
]

export default function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.number / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.number) {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = stat.number
                  return newCounts
                })
                clearInterval(timer)
              } else {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.floor(current)
                  return newCounts
                })
              }
            }, 30)
          })
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('stats-counter')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div id="stats-counter" className={styles.statsContainer}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statCard} fade-in-scale`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.statNumber}>
                {counts[index]}{stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
