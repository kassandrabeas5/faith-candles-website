import type { Metadata } from 'next'
import { getAllProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Shop All Candles | We Rise Together',
  description: 'Browse our full collection of faith-inspired candles',
}

export default function ShopPage() {
  const products = getAllProducts()

  return (
    <section className={styles.shopPage}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Collection</h1>
        <p className={styles.subtitle}>
          Each candle is thoughtfully crafted to bring light and intention into your space
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
