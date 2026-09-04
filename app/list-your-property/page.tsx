export default function ListProperty() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Developers & Property Owners</div>
          <h1>Have a Property to Sell?</h1>
          <p className="muted">
            Share the details with SOVARA. Every submission is reviewed before
            public listing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form
            className="form"
            action="https://forms.gle/BYqPK1JdtN8cbXLx5"
            method="get"
            target="_blank"
          >
            <input
              name="name"
              placeholder="Name"
              required
            />

            <input
              name="company"
              placeholder="Company / Developer Name"
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
              name="property"
              placeholder="Property / Project Name"
              required
            />

            <input
              name="location"
              placeholder="Location"
              required
            />

            <input
              name="type"
              placeholder="Property Type"
            />

            <textarea
              name="message"
              placeholder="Message / Property Details"
            />

            <button className="btn dark" type="submit">
              Submit Property
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
