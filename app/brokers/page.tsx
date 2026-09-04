export default function Brokers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">For Brokers</div>
          <h1>Build Your Real Estate Business With SOVARA</h1>
          <p className="muted">
            A simple, transparent partnership model for independent brokers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2 className="serif">How it works</h2>

            <ul className="list">
              <li>01 — Join the SOVARA broker network</li>
              <li>02 — Access selected properties</li>
              <li>03 — Bring your clients</li>
              <li>04 — SOVARA supervises the transaction</li>
              <li>05 — Successful deal → agreed commission</li>
            </ul>
          </div>

          <div>
            <h2 className="serif">Partner With Us</h2>

            <form
              className="form"
              action="https://forms.gle/5pQzThUogcXRooJa8"
              method="get"
              target="_blank"
            >
              <input
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                required
              />

              <input
                name="email"
                placeholder="Email"
                type="email"
              />

              <input
                name="city"
                placeholder="City"
              />

              <textarea
                name="message"
                placeholder="Tell us about your real-estate work"
              />

              <button className="btn dark" type="submit">
                Apply as Broker
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
