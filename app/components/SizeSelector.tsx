'use client'

import { useState } from 'react'
import type { ProductSize } from '../data/products'
import styles from './SizeSelector.module.css'

interface SizeSelectorProps {
  sizes: ProductSize[]
}

export default function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className={styles.selector}>
      <label className={styles.label}>Size</label>
      <div className={styles.options}>
        {sizes.map((size, i) => (
          <button
            key={size.label}
            className={`${styles.option} ${i === selectedIndex ? styles.active : ''}`}
            onClick={() => setSelectedIndex(i)}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  )
}
