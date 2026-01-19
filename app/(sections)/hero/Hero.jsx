import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* RIPPLE SIGNALS */}
      <div className={styles.signals} aria-hidden="true">
        <span className={`${styles.signal} ${styles.signal1}`} />
        <span className={`${styles.signal} ${styles.signal2}`} />
        <span className={`${styles.signal} ${styles.signal3}`} />
        <span className={`${styles.signal} ${styles.signal4}`} />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h1 className={styles.title}>Smarter Cattle Tracking with MooMap</h1>

        <p className={styles.subtitle}>
          Monitor your cattle in real-time using GPS-enabled collars and our
          intelligent mobile dashboard. Reduce theft, prevent accidents, and
          improve farm efficiency.
        </p>

        {/* BUTTON WITH ORBIT PARTICLES */}
        <a href="#features" className={styles.buttonWrap}>
          <span className={styles.particles} aria-hidden="true">
            <span className={`${styles.particle} ${styles.p1}`} />
            <span className={`${styles.particle} ${styles.p2}`} />
            <span className={`${styles.particle} ${styles.p3}`} />
            <span className={`${styles.particle} ${styles.p4}`} />
            <span className={`${styles.particle} ${styles.p5}`} />
            <span className={`${styles.particle} ${styles.p6}`} />
          </span>

          <span className={styles.button}>Explore Features</span>
        </a>
      </div>
    </section>
  );
}
