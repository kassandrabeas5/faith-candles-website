'use client'

import { useState } from 'react'
import styles from './QuantitySelector.module.css'

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  const decrease = () => setQuantity((q) => Math.max(1, q - 1))
  const increase = () => setQuantity((q) => Math.min(10, q + 1))

  return (
    <div className={styles.selector}>
      <label className={styles.label}>Quantity</label>
      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={decrease}
          aria-label="Decrease quantity"
          disabled={quantity <= 1}
        >
          &minus;
        </button>
        <span className={styles.value}>{quantity}</span>
        <button
          className={styles.button}
          onClick={increase}
          aria-label="Increase quantity"
          disabled={quantity >= 10}
        >
          +
        </button>
      </div>
    </div>
  )
}
