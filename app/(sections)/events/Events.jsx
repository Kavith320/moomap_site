"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Events.module.css";

const SLIDE_MS = 7000;
const IMAGE_MS = 3000;

function EventCard({ event, imgIndex }) {
  return (
    <div className={styles.card} data-mobile>
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
        <h2 className={styles.title}>{event.title}</h2>
        <p className={styles.desc}>{event.description}</p>
        <span className={styles.loc}>{event.location}</span>
      </div>
    </div>
  );
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const timers = useRef({ img: null, slide: null, slideFx: null });

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then((data) => setEvents(Array.isArray(data) ? data : []))
      .catch(() => setEvents([]));
  }, []);

  const activeEvent = useMemo(() => events[slideIndex], [events, slideIndex]);

  useEffect(() => {
    if (timers.current.img) clearInterval(timers.current.img);
    if (timers.current.slide) clearInterval(timers.current.slide);
    if (timers.current.slideFx) clearTimeout(timers.current.slideFx);

    if (!events.length) return;

    setImgIndex(0);

    timers.current.img = setInterval(() => {
      setImgIndex((i) => {
        const count = activeEvent?.images?.length || 0;
        if (count <= 1) return 0;
        return (i + 1) % count;
      });
    }, IMAGE_MS);

    if (events.length > 1) {
      timers.current.slide = setInterval(() => {
        setIsSliding(true);
        setSlideIndex((i) => (i + 1) % events.length);
        timers.current.slideFx = setTimeout(() => setIsSliding(false), 450);
      }, SLIDE_MS);
    }

    return () => {
      if (timers.current.img) clearInterval(timers.current.img);
      if (timers.current.slide) clearInterval(timers.current.slide);
      if (timers.current.slideFx) clearTimeout(timers.current.slideFx);
    };
  }, [events, slideIndex, activeEvent?.images?.length]);

  if (events.length === 0) return null;

  return (
    <section className={styles.wrapper} id="events">
      <div className={styles.viewport}>
        <div
          className={`${styles.track} ${isSliding ? styles.trackFading : ""}`}
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className={styles.slide}>
              <EventCard
                event={event}
                imgIndex={event.id === activeEvent?.id ? imgIndex : 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsSliding(true);
              setSlideIndex(i);
              setImgIndex(0);
              setTimeout(() => setIsSliding(false), 450);
            }}
            className={`${styles.dot} ${i === slideIndex ? styles.activeDot : ""}`}
            aria-label={`Go to event ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
