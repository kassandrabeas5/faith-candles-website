import { getFeaturedProducts } from '../data/products'
import ProductCard from './ProductCard'
import styles from './FeaturedProducts.module.css'

export default function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Featured Candles</h2>
        <p className={styles.subtitle}>
          Handpicked favorites crafted with intention and care
        </p>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
