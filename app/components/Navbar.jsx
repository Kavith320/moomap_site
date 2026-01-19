"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={styles.nav}>
      <div className={styles.container}>
        {/* Logo only */}
        <a className={styles.brand} href="/">
          <img className={styles.logo} src="/logo.jpg" alt="MooMap" />
          <span className={styles.name}>MooMap</span>
        </a>

        {/* Desktop links */}
        <nav className={styles.desktopOnly}>
          <ul className={styles.links}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className={styles.link} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`${styles.mobileOnly} ${styles.menuBtn}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={styles.mobileOnly}>
          <nav className={styles.mobilePanel}>
            {LINKS.map((l) => (
              <a
                key={l.href}
                className={styles.mobileLink}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
