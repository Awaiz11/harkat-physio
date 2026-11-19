import { CLINIC } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__name">
            {CLINIC.full} <span lang="ur">{CLINIC.urdu}</span>
          </p>
          <p className="footer__small">{CLINIC.area}</p>
        </div>
        <p className="footer__small">
          Harkat is a concept clinic. Website designed and built by{" "}
          <a href="https://nexaflow-brown.vercel.app/" target="_blank" rel="noopener noreferrer">
            NexaFlow
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
