import styles from "./Features.module.css";

export default function Features() {
  const features = [
    {
      image: "/Features/route.gif",
      title: "Real-time Tracking",
      description:
        "Track every animal’s live GPS position with high accuracy, even in remote areas.",
    },
    {
      image: "/Features/notification.gif",
      title: "Anti-Theft Alert",
      description:
         "Instantly detects suspicious activity or forced movement and sends immediate alerts to protect your cattle from theft.",

    },
    {
      image: "/Features/roadmap.gif",
      title: "Geofencing Alerts",
      description:
        "Get instant alerts when cattle move outside defined zones or safe areas.",
    },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Features</h2>
        <p className={styles.subtitle}>
          MooMap brings together smart tracking, health monitoring, and data analytics — built for
          modern cattle management.
        </p>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.card}>
              <img
                src={feature.image}
                alt={feature.title}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
