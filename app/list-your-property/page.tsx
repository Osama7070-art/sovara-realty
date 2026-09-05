"use client";

import { FormEvent, useState } from "react";

export default function ListYourProperty() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const company = (
      form.elements.namedItem("company") as HTMLInputElement
    ).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const property = (
      form.elements.namedItem("property") as HTMLInputElement
    ).value;
    const location = (
      form.elements.namedItem("location") as HTMLInputElement
    ).value;
    const type = (form.elements.namedItem("type") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const googleForm = document.createElement("form");

    googleForm.method = "POST";
    googleForm.action =
      "https://docs.google.com/forms/d/e/1FAIpQLScpz1aPlziClINzFcBniJeSbBK7OWm3Wyed5HfgKrKwRIdHzA/formResponse";
    googleForm.target = "google-property-submit";
    googleForm.style.display = "none";

    const fields = [
      ["entry.1368347809", name],
      ["entry.1759221085", company],
      ["entry.1978310884", phone],
      ["entry.2010962595", email],
      ["entry.938356518", property],
      ["entry.1889941349", location],
      ["entry.496685331", type],
      ["entry.1999374993", message],
    ];

    fields.forEach(([fieldName, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = fieldName;
      input.value = value;
      googleForm.appendChild(input);
    });

    document.body.appendChild(googleForm);
    googleForm.submit();

    setTimeout(() => {
      googleForm.remove();
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>
          <h1 className="serif">Submission Received.</h1>
          <p className="muted">
            Thank you for sharing your property details. Our team will review
            the submission and get in touch with you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <iframe
        name="google-property-submit"
        style={{ display: "none" }}
        title="Property submission"
      />

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Developers & Property Owners</div>
          <h1>Have a Property to Sell?</h1>
          <p className="muted">
            Share your details with SOVARA. Every submission is reviewed before
            public listing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Name"
              required
            />

            <input
              name="company"
              placeholder="Company / Developer Name"
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
              required
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
              required
            />

            <textarea
              name="message"
              placeholder="Message / Property Details"
              rows={6}
              required
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
