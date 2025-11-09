// app/(sections)/hero/Hero.tsx
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* RIPPLE SIGNALS */}
      <div className={styles.signals} aria-hidden="true">
        <span className={`${styles.signal} ${styles.signal1}`} />
        <span className={`${styles.signal} ${styles.signal2}`} />
        <span className={`${styles.signal} ${styles.signal3}`} />
        {/* Optional 4th ripple */}
        <span className={`${styles.signal} ${styles.signal4}`} />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h1 className={styles.title}>Smarter Cattle Tracking with MooMap</h1>
        <p className={styles.subtitle}>
          Monitor your cattle in real-time using GPS-enabled collars and our intelligent mobile dashboard.
          Reduce theft, prevent accidents, and improve farm efficiency.
        </p>
        <a href="#features" className={styles.button}>
          Explore Features
        </a>
      </div>
    </section>
  );
}
