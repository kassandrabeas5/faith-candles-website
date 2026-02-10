'use client'

import { useState } from 'react'
import styles from './AddToCartButton.module.css'

export default function AddToCartButton() {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      className={styles.addToCart}
      onClick={handleClick}
      disabled={added}
    >
      {added ? 'Added to Cart' : 'Add to Cart'}
    </button>
  )
}
