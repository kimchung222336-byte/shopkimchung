"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react"; 
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import styles from "./product.module.css";

const products = [
  { 
    id: 1, 
    name: "Táo đỏ Mỹ nhập khẩu", 
    price: "30.800₫", 
    oldPrice: "40.000₫", 
    image: "/apple.jpg", 
    description: "Táo đỏ Mỹ có vỏ ngoài đỏ thẫm bắt mắt, độ giòn cao và vị ngọt thanh đặc trưng. Sản phẩm chứa nhiều chất xơ và vitamin C giúp tăng cường hệ miễn dịch." 
  },
  { 
    id: 2, 
    name: "Chuối chuyên sấy dẻo", 
    price: "25.000₫", 
    oldPrice: "30.000₫", 
    image: "/Banana.jpg", 
    description: "Chuối chín cây tuyển chọn, sấy dẻo tự nhiên, không đường hóa học, giữ trọn vẹn hương vị truyền thống và nguồn năng lượng dồi dào." 
  },
  { 
    id: 3, 
    name: "Nho mẫu đơn không hạt", 
    price: "120.000₫", 
    oldPrice: "150.000₫", 
    image: "/nho.jpg", 
    description: "Nho mẫu đơn cao cấp, hương thơm như hoa cỏ, quả to mọng nước, vị ngọt đậm đà. Đây là loại trái cây thượng hạng phù hợp làm quà biếu." 
  },
  { 
    id: 4, 
    name: "Cam Sành mọng nước loại 1", 
    price: "45.000₫", 
    oldPrice: "60.000₫", 
    image: "/cam.jpg", 
    description: "Cam sành đặc sản vỏ mỏng, nhiều nước, vị chua ngọt hài hòa. Rất giàu vitamin C, cực tốt để giải nhiệt và tăng cường sức đề kháng." 
  },
  { 
    id: 5, 
    name: "Xoài Cát Hòa Lộc chín cây", 
    price: "85.000₫", 
    oldPrice: "100.000₫", 
    image: "/xoai.webp", 
    description: "Xoài cát Hòa Lộc nổi tiếng thịt dày, không xơ, vị ngọt lịm và mùi thơm đặc trưng không loại xoài nào sánh bằng." 
  },
  { 
    id: 6, 
    name: "Dâu tây Đà Lạt loại A", 
    price: "155.000₫", 
    oldPrice: "180.000₫", 
    image: "/dautay.jpg", 
    description: "Dâu tây giống Mỹ Đá được trồng tại Đà Lạt theo tiêu chuẩn VietGAP. Quả chín đỏ mọng, vị chua ngọt thanh mát, chứa nhiều chất chống oxy hóa tự nhiên." 
  },
  { 
    id: 7, 
    name: "Việt quất New Zealand", 
    price: "89.000₫", 
    oldPrice: "110.000₫", 
    image: "/vietquoc.jpg", 
    description: "Việt quất nhập khẩu tươi từ New Zealand, quả to, cứng trái và có lớp phấn phủ tự nhiên. Là siêu thực phẩm cực tốt cho trí não và thị lực." 
  },
  { 
    id: 8, 
    name: "Lê Nam Phi giòn ngọt", 
    price: "65.000₫", 
    oldPrice: "75.000₫", 
    image: "/le.jpg", 
    description: "Lê có hình dáng đặc trưng, vỏ xanh xen lẫn má hồng. Thịt lê trắng, giòn, nhiều nước và có vị ngọt mát tự nhiên, giúp nhuận tràng rất tốt." 
  },
  { 
    id: 9, 
    name: "Măng cụt Bảo Lộc", 
    price: "95.000₫", 
    oldPrice: "120.000₫", 
    image: "/mangcuc.jpg", 
    description: "Măng cụt chín cây vùng đất Bảo Lộc, vỏ mỏng, múi trắng ngần không bị sượng. Vị chua ngọt đặc trưng được mệnh danh là 'nữ hoàng trái cây'." 
  },
  { 
    id: 10, 
    name: "Bơ sáp Đắk Lắk dẻo thơm", 
    price: "55.000₫", 
    oldPrice: "70.000₫", 
    image: "/bo.jpg", 
    description: "Bơ sáp loại 1 từ Đắk Lắk, quả già chín tự nhiên, thịt bơ vàng ươm, dẻo như sáp và béo ngậy. Thích hợp làm sinh tố hoặc trộn salad dinh dưỡng." 
  },
];

// Component con xử lý tham số URL
function ProductDetailContent() {
  const id = useSearchParams().get("id");
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className={styles.notFound}>Sản phẩm không tồn tại!</div>;

  return (
    <div className={styles.productGrid}>
      <div className={styles.imageBox}>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={500} 
          height={500} 
          className={styles.mainImage}
          priority 
        />
      </div>

      <div className={styles.infoBox}>
        <nav className={styles.breadcrumb}>Trang chủ / Sản phẩm / {product.name}</nav>
        <h1 className={styles.name}>{product.name}</h1>
        
        <div className={styles.priceSection}>
          <span className={styles.currentPrice}>{product.price}</span>
          <span className={styles.oldPrice}>{product.oldPrice}</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.descriptionBox}>
          <h3>Mô tả sản phẩm</h3>
          <p>{product.description}</p>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.btnSecondary}>Thêm vào giỏ</button>
          <button className={styles.btnPrimary}>Mua ngay</button>
        </div>
        
        <div className={styles.trustBadges}>
          <span>✓ Giao hàng trong 2h</span>
          <span>✓ Đổi trả miễn phí</span>
        </div>
      </div>
    </div>
  );
}

// Component chính export ra ngoài, bọc trong cặp thẻ Suspense
export default function ProductDetailPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.container}>
        <Suspense fallback={<div className={styles.loading}>Đang tải thông tin sản phẩm...</div>}>
          <ProductDetailContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}