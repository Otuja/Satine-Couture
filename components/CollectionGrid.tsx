'use client'

import { useState } from 'react'
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className={styles.grid} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 2 ? '400px' : '320px'}, 1fr))` }}>
        {collections.map((collection, index) => (
          <div 
            key={collection.id}
            className={`${styles.card} fade-in-scale`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(collection.image)}
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
                  <button className={styles.viewMore}>View Full Image</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>×</button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Collection View" className={styles.modalImage} />
          </div>
        </div>
      )}
    </>
  )
}
