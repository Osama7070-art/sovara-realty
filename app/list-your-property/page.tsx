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
      <section className="premium-listing-success">
        <div className="container">

          <div className="eyebrow">
            SOVARA REALTY
          </div>

          <div className="listing-success-number">
            04
          </div>

          <h1 className="serif">
            Submission
            <br />
            <em>Received.</em>
          </h1>

          <p>
            Thank you for sharing your property details.
            Our team will review the submission and get in
            touch with you.
          </p>

          <a
            href="/"
            className="outline-link"
          >
            Return Home <span>↗</span>
          </a>

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

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="premium-listing-hero">
        <div className="container">

          <div className="premium-listing-label">
            <span>03</span>
            <span>DEVELOPERS & PROPERTY OWNERS</span>
            <span>SOVARA REALTY</span>
          </div>

          <div className="premium-listing-heading">

            <div className="eyebrow">
              PROPERTY SUBMISSION
            </div>

            <h1 className="serif">
              Have a Property
              <br />
              to <em>Sell?</em>
            </h1>

            <p>
              Share your property opportunity with SOVARA.
              Every submission is reviewed before it is
              considered for public listing.
            </p>

          </div>

          <div className="premium-listing-hero-bottom">
            <span>DEVELOPERS</span>
            <span>PROPERTY OWNERS</span>
            <span>REVIEW BEFORE LISTING</span>
          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO
          ===================================================== */}
      <section className="premium-listing-intro">
        <div className="container">

          <div className="premium-listing-intro-grid">

            <div className="eyebrow">
              WORK WITH SOVARA
            </div>

            <div>
              <h2 className="serif">
                Put the right
                <br />
                property in front
                <br />
                of the right
                <br />
                <em>network.</em>
              </h2>

              <p>
                SOVARA works with developers and property
                owners to present selected opportunities
                through an independent broker network.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SUBMISSION
          ===================================================== */}
      <section className="premium-listing-application">
        <div className="container">

          <div className="premium-listing-application-grid">

            <div className="premium-listing-copy">

              <div className="eyebrow">
                PROPERTY SUBMISSION
              </div>

              <h2 className="serif">
                Tell us
                <br />
                about the
                <br />
                <em>property.</em>
              </h2>

              <p>
                Provide the basic details below. Our team
                will review the information before any public
                listing decision is made.
              </p>

              <div className="premium-listing-notes">

                <div>
                  <span>01</span>
                  <p>
                    Submission does not automatically mean
                    public listing.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Property information will be verified
                    before publication.
                  </p>
                </div>

              </div>

            </div>

            <div className="premium-listing-form-wrap">

              <div className="eyebrow">
                PROPERTY DETAILS
              </div>

              <form
                className="premium-listing-form"
                onSubmit={handleSubmit}
              >

                <div className="premium-listing-field">
                  <span>01</span>
                  <input
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="premium-listing-field">
                  <span>02</span>
                  <input
                    name="company"
                    placeholder="Company / Developer Name"
                    required
                  />
                </div>

                <div className="premium-listing-field">
                  <span>03</span>
                  <input
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>

                <div className="premium-listing-field">
                  <span>04</span>
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>

                <div className="premium-listing-field">
                  <span>05</span>
                  <input
                    name="property"
                    placeholder="Property / Project Name"
                    required
                  />
                </div>

                <div className="premium-listing-field">
                  <span>06</span>
                  <input
                    name="location"
                    placeholder="Location"
                    required
                  />
                </div>

                <div className="premium-listing-field">
                  <span>07</span>
                  <input
                    name="type"
                    placeholder="Property Type"
                    required
                  />
                </div>

                <div className="premium-listing-field premium-listing-field-message">
                  <span>08</span>
                  <textarea
                    name="message"
                    placeholder="Message / Property Details"
                    rows={6}
                    required
                  />
                </div>

                <button
                  className="btn dark premium-listing-submit"
                  type="submit"
                >
                  Submit Property
                  <span>↗</span>
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CLOSING
          ===================================================== */}
      <section className="premium-listing-closing">
        <div className="container">

          <div className="eyebrow">
            SOVARA REALTY
          </div>

          <h2 className="serif">
            Selected properties.
            <br />
            <em>Trusted connections.</em>
          </h2>

        </div>
      </section>
    </>
  );
}
