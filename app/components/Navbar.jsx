import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                {/* Logo + Name (same row) */}
                <a href="" className={styles.brand}>
                <img src="/logo.jpg" alt="MooMap Logo" className={styles.logo} />

                    <span className={styles.name}>MooMap</span>
                </a>

                {/* Links */}
                <ul className={styles.links}>
                    <li><a href="#features" className={styles.link}>Features</a></li>
                    <li><a href="#pricing" className={styles.link}>Pricing</a></li>
                    <li><a href="#about" className={styles.link}>About</a></li>
                    <li><a href="#download" className={styles.link}>Download</a></li>
                    <li><a href="#gallery" className={styles.link}>Gallery</a></li>
                    <li><a href="#team" className={styles.link}>Team</a></li>
                    <li><a href="#contact" className={styles.link}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

