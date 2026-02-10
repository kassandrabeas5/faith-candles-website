'use client'

import { useState } from 'react'
import styles from './ShareButton.module.css'

export default function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    const title = document.title

    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // User cancelled or share failed silently
      }
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button className={styles.share} onClick={handleShare}>
      {copied ? 'Link Copied!' : 'Share'}
    </button>
  )
}
