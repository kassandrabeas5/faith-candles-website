import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>We Rise Together</h3>
            <p className={styles.tagline}>
              Faith-inspired candles handcrafted with purpose and care.
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/#collections">Collections</Link></li>
              <li><Link href="/#about">Our Story</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.columnTitle}>Get in Touch</h4>
            <p>San Diego, California</p>
            <p>hello@werisetogether.com</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} We Rise Together Candles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
