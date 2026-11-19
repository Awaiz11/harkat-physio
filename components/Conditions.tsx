"use client";

import { useState } from "react";
import { CONDITIONS } from "./data";

export default function Conditions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="conditions" className="conditions section" aria-labelledby="conditions-title">
      <div className="wrap conditions__grid">
        <div className="conditions__intro">
          <h2 id="conditions-title" className="h2">
            What we treat
          </h2>
          <p>
            Not sure if physio can help? Tap your problem to see how we treat it and roughly how
            long it takes. Or send us a message and ask.
          </p>
        </div>

        <ul className="accordion">
          {CONDITIONS.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.name} className={`acc ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="acc__button"
                    aria-expanded={isOpen}
                    aria-controls={`cond-${i}`}
                    id={`cond-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {c.name}
                    <span className="acc__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`cond-${i}`} role="region" aria-labelledby={`cond-btn-${i}`} className="acc__panel">
                  <div className="acc__inner">
                    <p>{c.body}</p>
                    <p className="acc__sessions">{c.sessions}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
