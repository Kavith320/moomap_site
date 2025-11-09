import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <h2 className={styles.title}>Pricing</h2>
      <p className={styles.subtitle}>
        Our pricing plans are being fine-tuned to suit farmers, co-ops, and
        distributors — launching soon!
      </p>

      <div className={styles.soonBox}>
        <h3 className={styles.soonText}>💡 Coming Soon</h3>
        <p className={styles.subText}>
          Stay tuned — transparent, affordable plans are on the way!
        </p>
      </div>
    </section>
  );
}
