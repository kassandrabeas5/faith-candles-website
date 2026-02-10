import styles from './PlaceholderImage.module.css'

interface PlaceholderImageProps {
  color: string
  aspectRatio?: string
  label?: string
  className?: string
}

export default function PlaceholderImage({ color, aspectRatio = '1 / 1', label, className }: PlaceholderImageProps) {
  return (
    <div
      className={`${styles.placeholder} ${className || ''}`}
      style={{
        backgroundColor: color,
        aspectRatio,
      }}
      role="img"
      aria-label={label || 'Product image placeholder'}
    >
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.overlay} />
    </div>
  )
}
