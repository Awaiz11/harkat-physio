"use client";

import { useEffect, useState } from "react";
import { CLINIC } from "./data";

const LINKS = [
  { href: "#conditions", label: "What we treat" },
  { href: "#how", label: "How it works" },
  { href: "#home-visits", label: "Home visits" },
  { href: "#fees", label: "Fees" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--raised" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="logo" aria-label={`${CLINIC.full} home`}>
          <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M5 26 A 13 13 0 0 1 27 14" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="27" cy="14" r="3.5" fill="#f4b740" />
          </svg>
          <span>
            {CLINIC.name}
            <small>Physiotherapy</small>
          </span>
        </a>

        <nav aria-label="Main">
          <ul className={`nav__links ${open ? "is-open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" className="btn btn--teal btn--small" onClick={() => setOpen(false)}>
                Book an assessment
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
