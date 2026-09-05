"use client";

import { FormEvent, useState } from "react";

export default function Brokers() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const city = (form.elements.namedItem("city") as HTMLInputElement).value;
    const experience = (
      form.elements.namedItem("experience") as HTMLSelectElement
    ).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const googleForm = document.createElement("form");

    googleForm.method = "POST";
    googleForm.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSe-4D2IiPWprJReAqMiPLCpqw4YsXUQq5jZCYjp_iS3Rcijfw/formResponse";
    googleForm.target = "google-broker-submit";
    googleForm.style.display = "none";

    const fields = [
      ["entry.1531679718", name],
      ["entry.465869926", phone],
      ["entry.492206955", email],
      ["entry.813118130", city],
      ["entry.2086656761", experience],
      ["entry.484645838", message],
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
          <h1 className="serif">Application Received.</h1>
          <p className="muted">
            Thank you for your interest in partnering with SOVARA. Our team
            will review your application and get in touch with you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <iframe
        name="google-broker-submit"
        style={{ display: "none" }}
        title="Broker application submission"
      />

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
              <li>05 — Successful deal — agreed commission</li>
            </ul>
          </div>

          <div>
            <h2 className="serif">Partner With Us</h2>

            <form className="form" onSubmit={handleSubmit}>
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
                required
              />

              <input
                name="city"
                placeholder="City"
                required
              />

              <select name="experience" required defaultValue="">
                <option value="" disabled>
                  Experience in Real Estate
                </option>
                <option value="Less than 1 Year">
                  Less than 1 Year
                </option>
                <option value="1–3 Years">
                  1–3 Years
                </option>
                <option value="3–5 Years">
                  3–5 Years
                </option>
                <option value="5+ Years">
                  5+ Years
                </option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your real-estate work"
                rows={6}
                required
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
