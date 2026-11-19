"use client";

import { useState, type FormEvent } from "react";
import { CLINIC, CONDITIONS, HOURS } from "./data";

type Errors = Partial<Record<"name" | "date", string>>;

export default function Book() {
  const [errors, setErrors] = useState<Errors>({});
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const date = String(f.get("date") || "");
    const problem = String(f.get("problem") || "");
    const where = String(f.get("where") || "At the clinic");
    const slot = String(f.get("slot") || "Evening");
    const female = f.get("female") === "on";

    const next: Errors = {};
    if (!name) next.name = "Add the patient's name.";
    if (!date) next.date = "Pick a day that suits you.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const day = new Date(`${date}T12:00`).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
    const msg =
      `Assalam o alaikum, I'd like to book a physiotherapy assessment at ${CLINIC.full}.\n` +
      `Patient: ${name}\nProblem: ${problem}\nWhere: ${where}\nDay: ${day}, ${slot.toLowerCase()}` +
      (female ? `\nPlease send a female physiotherapist.` : "");
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <section id="book" className="book section" aria-labelledby="book-title">
      <div className="wrap book__grid">
        <div className="book__info">
          <h2 id="book-title" className="h2">
            Book your first assessment
          </h2>
          <p>
            Fill this in and we&apos;ll confirm a time on WhatsApp, usually within an hour during
            clinic hours.
          </p>

          <dl className="info">
            <div>
              <dt>Clinic</dt>
              <dd>
                {CLINIC.area}
                <br />
                <a className="link" href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </dd>
            </div>
            {HOURS.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
            <div>
              <dt>Phone</dt>
              <dd>{CLINIC.phoneDisplay}</dd>
            </div>
          </dl>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Patient&apos;s name</label>
            <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
            {errors.name && <p className="field__error" id="err-name">{errors.name}</p>}
          </div>

          <div className="field">
            <label htmlFor="problem">What&apos;s bothering you?</label>
            <select id="problem" name="problem" defaultValue={CONDITIONS[0].name}>
              {CONDITIONS.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
              <option>Something else</option>
            </select>
          </div>

          <fieldset className="field choice">
            <legend>Where would you like treatment?</legend>
            <label>
              <input type="radio" name="where" value="At the clinic" defaultChecked /> At the clinic
            </label>
            <label>
              <input type="radio" name="where" value="At home" /> At home
            </label>
          </fieldset>

          <div className="field-row">
            <div className="field">
              <label htmlFor="date">Preferred day</label>
              <input id="date" name="date" type="date" min={today} aria-invalid={!!errors.date} aria-describedby={errors.date ? "err-date" : undefined} />
              {errors.date && <p className="field__error" id="err-date">{errors.date}</p>}
            </div>
            <div className="field">
              <label htmlFor="slot">Time</label>
              <select id="slot" name="slot" defaultValue="Evening">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>
          </div>

          <label className="check">
            <input type="checkbox" name="female" /> I&apos;d prefer a female physiotherapist
          </label>

          <button type="submit" className="btn btn--sun btn--block">
            Send request on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
