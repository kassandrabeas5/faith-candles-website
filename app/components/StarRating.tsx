import styles from './StarRating.module.css'

interface StarRatingProps {
  rating: number
  reviewCount?: number
}

export default function StarRating({ rating, reviewCount }: StarRatingProps) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className={styles.star}>&#9733;</span>)
    } else if (i === Math.ceil(rating) && rating % 1 >= 0.3) {
      stars.push(
        <span key={i} className={styles.halfStar}>
          <span className={styles.filled}>&#9733;</span>
          <span className={styles.empty}>&#9733;</span>
        </span>
      )
    } else {
      stars.push(<span key={i} className={styles.starEmpty}>&#9733;</span>)
    }
  }

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>{stars}</div>
      {reviewCount !== undefined && (
        <span className={styles.count}>({reviewCount})</span>
      )}
    </div>
  )
}
