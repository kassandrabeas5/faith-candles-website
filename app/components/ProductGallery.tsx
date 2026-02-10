'use client'

import { useState } from 'react'
import styles from './ProductGallery.module.css'

interface ProductGalleryProps {
  colors: string[]
  productName: string
}

export default function ProductGallery({ colors, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)

  const displayIndex = previewIndex ?? activeIndex

  return (
    <div className={styles.gallery}>
      <div
        className={styles.mainImage}
        style={{ backgroundColor: colors[displayIndex] }}
        role="img"
        aria-label={`${productName} - Image ${displayIndex + 1}`}
      >
        <div className={styles.mainOverlay} />
      </div>

      <div className={styles.thumbnails}>
        {colors.slice(1).map((color, i) => {
          const thumbIndex = i + 1
          return (
            <button
              key={thumbIndex}
              className={`${styles.thumbnail} ${activeIndex === thumbIndex ? styles.active : ''}`}
              style={{ backgroundColor: color }}
              onMouseEnter={() => setPreviewIndex(thumbIndex)}
              onMouseLeave={() => setPreviewIndex(null)}
              onClick={() => {
                setActiveIndex(thumbIndex)
                setPreviewIndex(null)
              }}
              aria-label={`View image ${thumbIndex + 1} of ${productName}`}
            >
              <div className={styles.thumbOverlay} />
            </button>
          )
        })}
      </div>
    </div>
  )
}
