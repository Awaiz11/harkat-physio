import { PHOTOS, img } from "./data";
import RangeDial from "./RangeDial";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            Move without pain again
          </h1>
          <p className="hero__lede">
            Physiotherapy for back pain, stiff shoulders, bad knees and recovery after surgery. At
            our clinic in Johar Town, or at your home anywhere in Lahore.
          </p>
          <div className="hero__actions">
            <a href="#book" className="btn btn--teal">
              Book an assessment
            </a>
            <a href="#conditions" className="btn btn--outline">
              What we treat
            </a>
          </div>
          <ul className="hero__facts">
            <li>Female physiotherapists available</li>
            <li>Home visits seven days a week</li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img
              src={img(PHOTOS.hero, 1100)}
              alt="Physiotherapist examining a patient's knee on a treatment table"
              fetchPriority="high"
            />
          </div>
          <RangeDial />
        </div>
      </div>
    </section>
  );
}
