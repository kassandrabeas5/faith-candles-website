import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <div className={styles.promoBanner}>
        A little extra glow — $5 off all candles (up to $25) →
      </div>

      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>We Rise Together</div>
          <ul className={styles.navLinks}>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#contact">Contact</a></li>
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
