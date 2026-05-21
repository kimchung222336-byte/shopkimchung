import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";



export default function Home() {
  const products = [
    { id: 1, name: "Táo đỏ Mỹ nhập khẩu tươi ngon", price: "30.800₫", oldPrice: "40.000₫", percent: "-20%", image: "/apple.jpg" },
    { id: 2, name: "Chuối chuyên sấy dẻo", price: "25.000₫", oldPrice: "30.000₫", percent: "-15%", image: "/Banana.jpg" },
    { id: 3, name: "Nho mẫu đơn không hạt", price: "120.000₫", oldPrice: "150.000₫", percent: "-20%", image: "/nho.jpg" },
    { id: 4, name: "Cam Sành mọng nước loại 1", price: "45.000₫", oldPrice: "60.000₫", percent: "-25%", image: "/cam.jpg" },
    { id: 5, name: "Xoài Cát Hòa Lộc chín cây", price: "85.000₫", oldPrice: "100.000₫", percent: "-15%", image: "/xoai.webp" },
    // --- 5 Sản phẩm mới thêm vào ---
    { id: 6, name: "Dâu tây Đà Lạt loại A", price: "155.000₫", oldPrice: "180.000₫", percent: "-14%", image: "/dautay.jpg" },
    { id: 7, name: "Việt quất New Zealand", price: "89.000₫", oldPrice: "110.000₫", percent: "-19%", image: "/vietquoc.jpg" },
    { id: 8, name: "Lê Nam Phi giòn ngọt", price: "65.000₫", oldPrice: "75.000₫", percent: "-13%", image: "/le.jpg" },
    { id: 9, name: "Măng cụt Bảo Lộc", price: "95.000₫", oldPrice: "120.000₫", percent: "-21%", image: "/mangcuc.jpg" },
    { id: 10, name: "Bơ sáp Đắk Lắk dẻo thơm", price: "55.000₫", oldPrice: "70.000₫", percent: "-21%", image: "/bo.jpg" },
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.mainWrapper}>
        <div className={styles.sectionHeader}>
          <h2>Bộ sưu tập trái cây tươi</h2>
          <p>Lựa chọn những gì tốt nhất cho sức khỏe gia đình bạn</p>
        </div>

        <div className={styles.mainContent}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className={styles.img}
                />
                {product.percent && <span className={styles.badge}>{product.percent}</span>}
              </div>
              
              <div className={styles.info}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.priceBox}>
                  <span className={styles.currentPrice}>{product.price}</span>
                  <span className={styles.oldPrice}>{product.oldPrice}</span>
                </div>
                <p className={styles.stock}>Còn lại: 10 sản phẩm</p>
              </div>
              
              <Link href={`/chitietsanpham?id=${product.id}`} className={styles.buyLink}>
                Mua ngay
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}