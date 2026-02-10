import { getCollections } from '../data/products'
import CollectionCard from './CollectionCard'
import styles from './Collections.module.css'

export default function Collections() {
  const collections = getCollections()

  return (
    <section id="collections" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Shop by Collection</h2>
        <p className={styles.subtitle}>
          Explore candles curated around themes of faith, comfort, and seasonal warmth
        </p>
        <div className={styles.grid}>
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  )
}
