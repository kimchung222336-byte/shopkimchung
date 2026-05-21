import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo bên trái */}
        <div className={styles.logo}>
          <Link href="/">
            {/* Thay /next.svg bằng /logotraicay.jpg */}
            <Image 
              src="/logotraicay.png" 
              alt="Logo Trái Cây Tươi Ngon" 
              width={220} 
              height={220} 
              className={styles.logoImg}
              priority 
            />
          </Link>
        </div>

        {/* Menu ở giữa */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/san-pham">Sản phẩm</Link></li>
            <li><Link href="/tin-tuc">Tin tức</Link></li>
            <li><Link href="/lien-he">Liên hệ</Link></li>
          </ul>
        </nav>

        {/* Nút hành động bên phải */}
        <div className={styles.actions}>
          <button className={styles.ctaButton}>Đăng nhập</button>
        </div>
      </div>
    </header>
  );
}