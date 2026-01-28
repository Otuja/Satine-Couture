'use client'

import Link from 'next/link'
import styles from './CollectionGrid.module.css'

export interface Collection {
  id: string
  title: string
  category: string
  image: string
  description?: string
  slug: string
}

interface CollectionGridProps {
  collections: Collection[]
  columns?: number
}

export default function CollectionGrid({ collections, columns = 3 }: CollectionGridProps) {
  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 2 ? '400px' : '320px'}, 1fr))` }}>
      {collections.map((collection, index) => (
        <Link 
          href={`/collections/${collection.slug}`} 
          key={collection.id}
          className={`${styles.card} fade-in-scale`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={styles.imageWrapper}>
            <img
              src={collection.image}
              alt={collection.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <span className={styles.category}>{collection.category}</span>
                <h3 className={styles.title}>{collection.title}</h3>
                {collection.description && (
                  <p className={styles.description}>{collection.description}</p>
                )}
                <span className={styles.viewMore}>View Collection →</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
