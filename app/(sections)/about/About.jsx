import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <section id="about" className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>About MooMap</h2>

        {/* === Technologies Section === */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Technologies</h3>
          <p className={styles.text}>
            MooMap uses a dual-collar system to balance communication efficiency and power
            consumption. The <strong>Master Collar</strong> collects and sends data to the cloud,
            while <strong>Slave Collars</strong> communicate locally within the herd.
          </p>

          <div className={styles.subSectionGroup}>
            {/* Master Collar */}
            <div className={styles.subSection}>
              <div className={styles.subMedia}>
                <img
                  src="/About/master-collar.png"
                  alt="Master Collar (GPS, GPRS, LoRa)"
                  className={styles.subImage}
                />
              </div>
              <h4 className={styles.cardTitle}>Master Collar</h4>
              <p className={styles.subText}>
                Network hub that aggregates data and uploads to the cloud using a cellular link.
              </p>
              <div className={styles.subTechList}>
                <span className={styles.subTechItem}>📍 GPS Tracking</span>
                <span className={styles.subTechItem}>📶 GPRS / Cellular Uplink</span>
                <span className={styles.subTechItem}>📡 LoRa to Slaves</span>
              </div>
            </div>

            {/* Slave Collar */}
            <div className={styles.subSection}>
              <div className={styles.subMedia}>
                <img
                  src="/About/slave-collar.png"
                  alt="Slave Collar (GPS, LoRa)"
                  className={styles.subImage}
                />
              </div>
              <h4 className={styles.cardTitle}>Slave Collar</h4>
              <p className={styles.subText}>
                Sends GPS data to the Master via LoRa. No SIM or direct internet needed.
              </p>
              <div className={styles.subTechList}>
                <span className={styles.subTechItem}>📍 GPS Module</span>
                <span className={styles.subTechItem}>📡 LoRa to Master</span>
                <span className={styles.subTechItem}>⚡ Low-Power</span>
              </div>
            </div>
          </div>

          {/* === How it works (creative) === */}
          <div className={styles.howSection}>
            <h4 className={styles.howTitle}>How it works</h4>

            {/* Flow diagram */}
            <div className={styles.flowWrap}>
              {/* Left node: Slaves */}
              <div className={styles.node}>
                <div className={styles.nodeIcon}>🐮</div>
                <div className={styles.nodeTitle}>Slave Collars</div>
                <div className={styles.nodeText}>GPS + LoRa</div>
              </div>

              {/* Arrow */}
              <div className={styles.arrow}>
                <svg viewBox="0 0 120 24" className={styles.arrowSvg} aria-hidden="true">
                  <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
                      <polygon points="0 0, 8 3.5, 0 7" />
                    </marker>
                  </defs>
                  <line x1="0" y1="12" x2="118" y2="12" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
                <span className={styles.arrowLabel}>LoRa (local)</span>
              </div>

              {/* Center node: Master */}
              <div className={`${styles.node} ${styles.nodePrimary}`}>
                <div className={styles.nodeIcon}>🛰️</div>
                <div className={styles.nodeTitle}>Master Collar</div>
                <div className={styles.nodeText}>Aggregator & Uplink</div>
              </div>

              {/* Arrow */}
              <div className={styles.arrow}>
                <svg viewBox="0 0 120 24" className={styles.arrowSvg} aria-hidden="true">
                  <defs>
                    <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
                      <polygon points="0 0, 8 3.5, 0 7" />
                    </marker>
                  </defs>
                  <line x1="0" y1="12" x2="118" y2="12" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                </svg>
                <span className={styles.arrowLabel}>Cellular (GPRS/LTE)</span>
              </div>

              {/* Right node: Cloud/App */}
              <div className={styles.node}>
                <div className={styles.nodeIcon}>☁️</div>
                <div className={styles.nodeTitle}>MooMap Cloud</div>
                <div className={styles.nodeText}>API & Dashboard</div>
              </div>
            </div>

            {/* Steps list */}
            <ol className={styles.steps}>
              <li>
                <strong>Slave collars</strong> send GPS + telemetry to the <strong>Master</strong> over LoRa.
              </li>
              <li>
                <strong>Master collar</strong> aggregates herd data and sends a single <strong>cellular uplink</strong> to the cloud.
              </li>
              <li>
                <strong>App & dashboard</strong> show live locations, alerts, and history for the whole herd.
              </li>
            </ol>

            {/* Rules */}
            <ul className={styles.rules}>
              <li>✅ One herd needs exactly <strong>one Master collar</strong>; the rest are <strong>Slaves</strong>.</li>
              <li>✅ Only the <strong>Master</strong> requires a <strong>cellular SIM</strong> — one connection for the entire herd.</li>
              <li>✅ Slaves pair to the Master (QR or auto-discover) and appear as a single herd in the app.</li>
            </ul>
          </div>
        </div>

      

        {/* === Resources Section === */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Resources</h3>
          <p className={styles.text}>Explore project resources, updates, and documentation:</p>
          <ul className={styles.resourceList}>
            <li className={styles.resourceItem}><a href="https://drive.google.com/drive/folders/1sfHnzGGH9pghgmH4azuGZUzDmXCfPAEI?usp=sharing">📡 Documentation &amp; Reference</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
