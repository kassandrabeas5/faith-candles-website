import Link from 'next/link'
import type { Collection } from '../data/products'
import styles from './CollectionCard.module.css'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href="/shop" className={styles.card} style={{ backgroundColor: collection.color }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3 className={styles.name}>{collection.name}</h3>
        <p className={styles.description}>{collection.description}</p>
        <span className={styles.count}>{collection.productCount} Products</span>
      </div>
    </Link>
  )
}
