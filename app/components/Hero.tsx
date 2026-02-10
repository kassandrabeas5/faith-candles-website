import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>We Rise Together Candles</h1>
        <p className={styles.heroTagline}>
          Welcome to a collection created with purpose and care. Our candles are thoughtfully poured to encourage peace, reflection, and comfort—bringing light and intention into every space.
        </p>
        <Link href="/shop" className={styles.ctaButton}>
          <span>Explore Our Collection</span>
        </Link>
      </div>
    </section>
  )
}
