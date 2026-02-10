'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

interface DropdownItem {
  label: string
  href: string
}

interface DropdownConfig {
  label: string
  href: string
  heading: string
  items: DropdownItem[]
}

const shopDropdown: DropdownConfig = {
  label: 'Shop',
  href: '/shop',
  heading: 'Categories',
  items: [
    { label: 'Faith Candles', href: '/category/faith-candles' },
    { label: 'Signature Scents', href: '/category/signature-scents' },
    { label: 'Faith Journals', href: '/category/faith-journals' },
    { label: 'Custom Branding', href: '/category/custom-branding' },
  ],
}

const collectionsDropdown: DropdownConfig = {
  label: 'Collections',
  href: '/collections',
  heading: 'Collections',
  items: [
    { label: 'Faith Candles', href: '/collections/faith-candles' },
    { label: 'Signature Scents', href: '/collections/signature-scents' },
  ],
}

function NavDropdown({ config }: { config: DropdownConfig }) {
  const [open, setOpen] = useState(false)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const triggerRef = useRef<HTMLAnchorElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLLIElement>(null)

  const cancelClose = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimeout.current = setTimeout(() => setOpen(false), 150)
  }, [cancelClose])

  const openMenu = useCallback(() => {
    cancelClose()
    setOpen(true)
  }, [cancelClose])

  const closeMenu = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    return () => cancelClose()
  }, [cancelClose])

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'Enter':
        if (!open) {
          e.preventDefault()
          setOpen(true)
          requestAnimationFrame(() => {
            const firstItem = menuRef.current?.querySelector<HTMLAnchorElement>('a')
            firstItem?.focus()
          })
        } else if (e.key === 'ArrowDown') {
          e.preventDefault()
          const firstItem = menuRef.current?.querySelector<HTMLAnchorElement>('a')
          firstItem?.focus()
        }
        break
      case 'Escape':
        if (open) {
          e.preventDefault()
          closeMenu()
        }
        break
    }
  }

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])
    const currentIndex = items.indexOf(e.target as HTMLAnchorElement)

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        items[(currentIndex + 1) % items.length]?.focus()
        break
      case 'ArrowUp':
        e.preventDefault()
        items[(currentIndex - 1 + items.length) % items.length]?.focus()
        break
      case 'Escape':
        e.preventDefault()
        closeMenu()
        break
      case 'Tab':
        scheduleClose()
        break
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!open) {
      e.preventDefault()
      setOpen(true)
    }
  }

  return (
    <li
      ref={containerRef}
      className={styles.hasDropdown}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        ref={triggerRef}
        href={config.href}
        aria-haspopup="true"
        aria-expanded={open}
        onKeyDown={handleTriggerKeyDown}
        onFocus={openMenu}
        onTouchStart={handleTouchStart}
      >
        {config.label}
      </Link>
      <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}>
        <div className={styles.dropdownCard}>
          <span className={styles.dropdownHeading}>{config.heading}</span>
          <ul
            ref={menuRef}
            className={styles.dropdownList}
            role="menu"
            aria-label={config.heading}
            onKeyDown={handleMenuKeyDown}
          >
            {config.items.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

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
            <NavDropdown config={shopDropdown} />
            <NavDropdown config={collectionsDropdown} />
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
