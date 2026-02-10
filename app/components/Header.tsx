import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <div className={styles.promoBanner}>
        A little extra glow — $5 off all candles (up to $25) →
      </div>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>We Rise Together</Link>
          <ul className={styles.navLinks}>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/#collections">Collections</Link></li>
            <li><Link href="/#about">Our Story</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
          <div className={styles.navIcons}>
            <button aria-label="Search">🔍</button>
            <button aria-label="Account">👤</button>
            <button aria-label="Cart">🛒</button>
          </div>
        </nav>
      </header>
    </>
  )
}
