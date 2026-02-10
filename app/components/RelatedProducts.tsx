import { getRelatedProducts } from '../data/products'
import ProductCard from './ProductCard'
import styles from './RelatedProducts.module.css'

interface RelatedProductsProps {
  currentSlug: string
  limit?: number
}

export default function RelatedProducts({ currentSlug, limit = 4 }: RelatedProductsProps) {
  const products = getRelatedProducts(currentSlug, limit)

  if (products.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>You May Also Love</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
