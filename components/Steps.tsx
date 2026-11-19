import { PHOTOS, STEPS, img } from "./data";

export default function Steps() {
  return (
    <section id="how" className="steps section" aria-labelledby="steps-title">
      <div className="wrap">
        <h2 id="steps-title" className="h2 steps__title">
          How your treatment works
        </h2>
        <div className="steps__grid">
          <ol className="steps__list">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="steps__num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="steps__photos" aria-hidden="true">
            <img src={img(PHOTOS.band, 700)} alt="" loading="lazy" />
            <img src={img(PHOTOS.shoulder, 700)} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
