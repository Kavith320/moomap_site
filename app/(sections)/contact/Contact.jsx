"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "", msg: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    if (!name || !email || !message) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }

    // ✅ Build a mailto link
    const subject = encodeURIComponent(`MooMap inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Opens the user’s default mail app with prefilled info
    window.location.href = `mailto:contact@moomap.app?subject=${subject}&body=${body}`;

    // Optional confirmation message
    setStatus({
      type: "success",
      msg: "Opening your email app...",
    });

    e.currentTarget.reset();
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        {/* === Left: Info === */}
        <div className={styles.info}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.text}>
            Have questions, partnership ideas, or want a product demo?
            We’d love to hear from you. Our team typically replies within 24 hours.
          </p>

          <div className={styles.contactItem}>📧 sendtokavith@gmail.com</div>
          <div className={styles.contactItem}>📞 +94 785 153 550</div>
        </div>

        {/* === Right: Form === */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className={styles.input}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className={styles.textarea}
            required
          />

          {status.msg && (
            <p
              className={
                status.type === "error"
                  ? styles.alertError
                  : styles.alertSuccess
              }
            >
              {status.msg}
            </p>
          )}

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
