import styles from "./Download.module.css";

export default function Download() {
  return (
    <section id="download" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Download the MooMap App</h2>
        <p className={styles.text}>
          Access your farm anytime, anywhere. Track cattle, view alerts, and manage your herd directly from your mobile device.
        </p>

        <div className={styles.buttons}>
          <a href="#" className={`${styles.button} ${styles.playStore}`}> Google Play</a>
          <a href="#" className={`${styles.button} ${styles.appStore}`}>  App Store</a>
        </div>

        <p className={styles.note}>Available soon on all platforms.</p>
      </div>
    </section>
  );
}
