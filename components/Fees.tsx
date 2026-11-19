import { FEES } from "./data";

export default function Fees() {
  return (
    <section id="fees" className="fees section" aria-labelledby="fees-title">
      <div className="wrap fees__grid">
        <div>
          <h2 id="fees-title" className="h2">
            Clear fees, no surprises
          </h2>
          <p className="fees__lede">
            You&apos;ll know the full cost of your plan after the first assessment. Pay by cash, card or
            bank transfer.
          </p>
        </div>
        <table className="fees__table">
          <caption className="sr-only">Physiotherapy fees in rupees</caption>
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Fee</th>
            </tr>
          </thead>
          <tbody>
            {FEES.map((f) => (
              <tr key={f.item}>
                <th scope="row">
                  {f.item}
                  <span>{f.note}</span>
                </th>
                <td>Rs {f.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
