"use client";
import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  // 👇 Define all images
  const images = [
    { src: "/Gallery/1.png", type: "portrait" },
    { src: "/Gallery/5.png", type: "portrait" },
    { src: "/Gallery/6.png", type: "portrait" },
    { src: "/Gallery/11.jpg", type: "portrait" },
    { src: "/Gallery/7.png", type: "portrait" },
    { src: "/Gallery/8.jpg", type: "portrait" },
    { src: "/Gallery/10.jpg", type: "portrait" },
    { src: "/Gallery/2.png", type: "squair" },
    { src: "/Gallery/3.png", type: "landscape" },
   
    { src: "/Gallery/4.png", type: "landscape" },

    { src: "/Gallery/12.jpg", type: "landscape" },
  ,
    { src: "/Gallery/13.jpg", type: "landscape" },
    
    { src: "/Gallery/9.jpg", type: "landscape" },

   
  ];

  
  // 👇 only show first few by default
  const [visibleCount, setVisibleCount] = useState(8);
  const [expanded, setExpanded] = useState(false);

  const toggleGallery = () => {
    if (expanded) {
      setVisibleCount(6);
    } else {
      setVisibleCount(images.length);
    }
    setExpanded(!expanded);
  };

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.text}>
          A glimpse of MooMap in action — devices, dashboards, and real farm environments.
        </p>

        <div className={styles.grid}>
          {images.slice(0, visibleCount).map((img, index) => (
            <div key={index} className={`${styles.card} ${styles[img.type] || ""}`}>
              <img src={img.src} alt={`Gallery ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>

        <button onClick={toggleGallery} className={styles.button}>
          {expanded ? "See Less ▲" : "See More ▼"}
        </button>
      </div>
    </section>
  );
}