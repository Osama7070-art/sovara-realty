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
      "https://docs.google.com/forms/d/e/1FAIpQLSe39rB-2BQufLRfY6Q985S2yrk1jM59-RJaBQzcU2494SrqQQ/formResponse";
    googleForm.target = "google-form-submit";
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
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>
          <h1 className="serif">Thank You.</h1>
          <p className="muted">
            Your enquiry has been received. Our team will get in touch with
            you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <iframe
        name="google-form-submit"
        style={{ display: "none" }}
        title="Form submission"
      />

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1 className="serif">Let’s Connect.</h1>
          <p className="muted">
            Have a property enquiry or want to work with SOVARA? Send us your
            details and our team will get in touch.
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

            <textarea
              name="message"
              placeholder="How can we help?"
              rows={6}
              required
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
