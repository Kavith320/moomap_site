import styles from "./Team.module.css";

export default function Team() {
  // 👇 Add or edit members here
  const members = [
    { name: "Kavith", role: "Founder/Hardware & IoT Developer", img: "/Team/Kavith.jpeg" },
    { name: "Imalka", role: "Mobile APP Developer", img: "/Team/Imalka.jpeg" },
    { name: "Sashika", role: "DevOps/Cloud Infrastructure Developer", img: "/Team/Sashika.jpeg" },
    { name: "Naduni", role: "Database Administrator", img: "/Team/Naduni.jpeg" },
    { name: "Roshan", role: "Frontend Developer", img: "/Team/Roshan.jpeg" },
    { name: "Yohan", role: "AI Integration Developer", img: "/Team/Yohan.jpeg" },
    { name: "Thivanka", role: "Backend Developer", img: "/Team/Jaya.jpeg" },
  ];

  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Team</h2>
        <p className={styles.subtitle}>
          The people behind MooMap — building reliable tech for real farms.
        </p>

        <div className={styles.grid}>
          {members.map((m, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.avatarWrap}>
                <img src={m.img} alt={m.name} className={styles.avatar} />
              </div>
              <h3 className={styles.name}>{m.name}</h3>

              {/* Animated role text */}
              <p className={styles.role} aria-label={m.role}>
                <span className={styles.roleInner}>{m.role}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
