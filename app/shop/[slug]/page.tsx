import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllProducts, getProductBySlug } from '../../data/products'
import ProductGallery from '../../components/ProductGallery'
import StarRating from '../../components/StarRating'
import SizeSelector from '../../components/SizeSelector'
import QuantitySelector from '../../components/QuantitySelector'
import AddToCartButton from '../../components/AddToCartButton'
import ShareButton from '../../components/ShareButton'
import RelatedProducts from '../../components/RelatedProducts'
import styles from './page.module.css'

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} | We Rise Together Candles`,
    description: product.shortDescription,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <>
      <section className={styles.productDetail}>
        <div className={styles.container}>
          <div className={styles.twoColumn}>
            <div className={styles.galleryColumn}>
              <ProductGallery colors={product.colors} productName={product.name} />
            </div>

            <div className={styles.infoColumn}>
              <span className={styles.category}>{product.category}</span>
              <h1 className={styles.productName}>{product.name}</h1>

              <div className={styles.priceRow}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>

              <div className={styles.controls}>
                <SizeSelector sizes={product.sizes} />
                <QuantitySelector />
                <AddToCartButton />
              </div>

              <div className={styles.description}>
                <p>{product.description}</p>
              </div>

              <div className={styles.fulfillment}>
                {product.pickupAvailable && (
                  <p className={styles.fulfillmentItem}>
                    Pickup available in San Diego, CA
                  </p>
                )}
                <p className={styles.fulfillmentItem}>
                  Usually ready in {product.fulfillmentDays} business days
                </p>
              </div>

              <ShareButton />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentSlug={product.slug} />
    </>
  )
}
