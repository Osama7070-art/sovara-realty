"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const googleForm = document.createElement("form");

    googleForm.method = "POST";
    googleForm.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSe39rB-2BQufLRfY6Q985S2yr1kM59-RJaBQzcU2494SrqQQ/formResponse";
    googleForm.target = "google-contact-submit";
    googleForm.style.display = "none";

    const fields = [
      ["entry.1461084429", name],
      ["entry.484427673", phone],
      ["entry.660279963", email],
      ["entry.699626368", message],
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
      <section className="premium-contact-success">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>

          <div className="contact-success-number">05</div>

          <h1 className="serif">
            Enquiry
            <br />
            <em>Received.</em>
          </h1>

          <p>
            Thank you for contacting SOVARA. Our team will review your
            enquiry and get in touch with you.
          </p>

          <a href="/" className="outline-link">
            Return Home <span>↗</span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <iframe
        name="google-contact-submit"
        style={{ display: "none" }}
        title="Contact form submission"
      />

      {/* HERO */}
      <section className="premium-contact-hero">
        <div className="container">
          <div className="premium-contact-label">
            <span>05</span>
            <span>CONTACT SOVARA</span>
            <span>SOVARA REALTY</span>
          </div>

          <div className="premium-contact-heading">
            <div className="eyebrow">GET IN TOUCH</div>

            <h1 className="serif">
              Let&apos;s Start
              <br />
              a <em>Conversation.</em>
            </h1>

            <p>
              Whether you are looking for a property, representing a
              property, or interested in joining the SOVARA network, we
              would be pleased to hear from you.
            </p>
          </div>

          <div className="premium-contact-hero-bottom">
            <span>PROPERTY ENQUIRIES</span>
            <span>DEVELOPERS & OWNERS</span>
            <span>BROKER NETWORK</span>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="premium-contact-main">
        <div className="container premium-contact-main-grid">
          <div className="premium-contact-intro">
            <div className="eyebrow">01 — SEND AN ENQUIRY</div>

            <h2 className="serif">
              The right
              <br />
              conversation
              <br />
              starts <em>here.</em>
            </h2>

            <p>
              Share your requirement with us and our team will review the
              details before getting back to you.
            </p>

            <div className="premium-contact-notes">
              <div>
                <span>01</span>
                <p>
                  For property enquiries, please include the location,
                  configuration or any other requirement you already know.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  For developers and property owners, you can also use our
                  dedicated <strong>List Your Property</strong> page.
                </p>
              </div>
            </div>
          </div>

          <div className="premium-contact-form-wrap">
            <div className="eyebrow">YOUR DETAILS</div>

            <form
              className="premium-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="premium-contact-field">
                <span>01</span>

                <input
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="premium-contact-field">
                <span>02</span>

                <input
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="premium-contact-field">
                <span>03</span>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="premium-contact-field premium-contact-field-message">
                <span>04</span>

                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={7}
                  required
                />
              </div>

              <button
                className="btn dark premium-contact-submit"
                type="submit"
              >
                Send Enquiry
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="premium-contact-closing">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>

          <h2 className="serif">
            Property is personal.
            <br />
            <em>The connection should be trusted.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
