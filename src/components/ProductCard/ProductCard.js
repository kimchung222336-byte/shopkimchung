import Image from "next/image";
import Link from "next/link"; 
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link href={`/chitietsanpham?id=${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span className={styles.viewDetail}>Xem chi tiết</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price}</span>
          {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
        </div>
      </div>
    </Link>
  );
}