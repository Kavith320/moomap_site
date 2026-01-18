"use client";

import { useEffect, useState } from "react";
import styles from "./Events.module.css";

function EventCard({ event }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (!event?.images || event.images.length <= 1) return;
    const t = setInterval(() => {
      setImgIndex((i) => (i + 1) % event.images.length);
    }, 3000);
    return () => clearInterval(t);
  }, [event]);

  return (
    <div className={styles.card}>
      {event.images?.map((img, i) => (
        <div
          key={`${event.id}-${img}-${i}`}
          className={`${styles.bg} ${i === imgIndex ? styles.show : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {event.isUpcoming && <div className={styles.badge}>Upcoming</div>}

      <div className={styles.overlay}>
        <p className={styles.date}>{event.dateText}</p>
        <h2>{event.title}</h2>
        <p className={styles.desc}>{event.description}</p>
        <span className={styles.loc}>{event.location}</span>
      </div>
    </div>
  );
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then((data) => {
        setEvents(Array.isArray(data) ? data : []);
      })
      .catch(() => setEvents([]));
  }, []);

  useEffect(() => {
    if (events.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % events.length);
    }, 5000);
    return () => clearInterval(t);
  }, [events.length]);

  if (events.length === 0) return null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className={styles.slide}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className={styles.dots}>
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            aria-label={`Go to event ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
