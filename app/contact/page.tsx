export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1 className="serif">Let's Connect.</h1>
          <p className="muted">
            Have a property enquiry or want to work with SOVARA?
            Send us your details and our team will get in touch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form
            className="form"
            action="https://forms.gle/Pf26NwaPJX1KdKpp9"
            method="get"
            target="_blank"
          >
            <input
              name="name"
              placeholder="Name"
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

            <textarea
              name="message"
              placeholder="How can we help?"
            />

            <button className="btn dark" type="submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
