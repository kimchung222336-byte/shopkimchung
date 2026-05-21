import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4 className={styles.title}>Về chúng tôi</h4>
            <p className={styles.text}>Cửa hàng trái cây sạch, cam kết mang đến giá trị dinh dưỡng cao nhất và chất lượng tươi ngon mỗi ngày cho gia đình bạn.</p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.title}>Liên hệ</h4>
            <p className={styles.text}>123 Đường ABC, TP. Hồ Chí Minh</p>
            <p className={styles.text}>Hotline: 1900 1234</p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.title}>Theo dõi</h4>
            <div className={styles.socials}>
              <span>Facebook</span>
              <span>Zalo</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2026 MY STORE. PREMIUM FRUIT SELECTION.
        </div>
      </div>
    </footer>
  );
}