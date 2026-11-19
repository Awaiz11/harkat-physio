import { CLINIC, PHOTOS, img } from "./data";

const ask = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
  `Assalam o alaikum, I'd like a physiotherapy home visit. My area is: `
)}`;

export default function HomeVisits() {
  return (
    <section id="home-visits" className="homev" aria-labelledby="homev-title">
      <div className="wrap homev__inner">
        <div className="homev__photo">
          <img src={img(PHOTOS.table, 1000)} alt="Physiotherapist treating a patient's shoulder" loading="lazy" />
        </div>
        <div className="homev__copy">
          <h2 id="homev-title" className="h2">
            Can&apos;t come to us? We come to you.
          </h2>
          <p>
            For elderly parents, patients just home from surgery, or anyone who finds the trip
            painful. A physiotherapist brings a folding table and equipment to your home, anywhere
            in Lahore.
          </p>
          <ul className="ticks">
            <li>Same-day visits when you book before noon</li>
            <li>Ask for a female physiotherapist at no extra cost</li>
            <li>Family members shown the exercises to help between visits</li>
          </ul>
          <a className="btn btn--teal" href={ask} target="_blank" rel="noopener noreferrer">
            Ask about a home visit
          </a>
        </div>
      </div>
    </section>
  );
}
