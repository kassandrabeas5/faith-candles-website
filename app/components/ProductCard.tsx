import Link from 'next/link'
import type { Product } from '../data/products'
import PlaceholderImage from './PlaceholderImage'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className={styles.card}>
      <PlaceholderImage
        color={product.colors[0]}
        label={product.name}
      />
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
