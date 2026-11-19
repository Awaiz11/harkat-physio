"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A goniometer-style dial: the arm sweeps from a stiff knee (35°) to a healthy bend (120°)
 * and the reading counts up with it. It plays once, when the dial first comes into view.
 */
const START = 35;
const END = 120;
const R = 78;
const CX = 100;
const CY = 100;

const point = (deg: number, r = R) => {
  const a = ((180 - deg) * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY - r * Math.sin(a)];
};

const arc = (from: number, to: number) => {
  const [x1, y1] = point(from);
  const [x2, y2] = point(to);
  return `M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`;
};

export default function RangeDial() {
  const [deg, setDeg] = useState(START);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDeg(END);
      return;
    }
    let raf = 0;
    let delay = 0;
    const play = () => {
      delay = window.setTimeout(() => {
        const t0 = performance.now();
        const dur = 2200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setDeg(Math.round(START + (END - START) * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }, 500);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(delay);
      cancelAnimationFrame(raf);
    };
  }, []);

  const [ax, ay] = point(deg, R + 6);
  const ticks = Array.from({ length: 19 }, (_, i) => i * 10);

  return (
    <figure ref={ref} className="dial" aria-label="Knee bend measured from 35 degrees to 120 degrees">
      <svg viewBox="0 0 200 116" aria-hidden="true">
        <path d={arc(0, 180)} className="dial__track" />
        <path d={arc(0, Math.max(deg, 0.01))} className="dial__fill" />
        {ticks.map((t) => {
          const [x1, y1] = point(t, R - 12);
          const [x2, y2] = point(t, R - (t % 30 === 0 ? 20 : 16));
          return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} className="dial__tick" />;
        })}
        <line x1={CX} y1={CY} x2={ax} y2={ay} className="dial__arm" />
        <circle cx={CX} cy={CY} r="6" className="dial__pivot" />
      </svg>
      <figcaption>
        <span className="dial__value">{deg}°</span>
        <span className="dial__label">Knee bend, measured at every visit</span>
      </figcaption>
    </figure>
  );
}
