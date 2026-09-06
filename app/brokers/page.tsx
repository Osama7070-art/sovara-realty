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
      <section className="premium-broker-success">
        <div className="container">

          <div className="eyebrow">
            SOVARA REALTY
          </div>

          <div className="broker-success-number">
            03
          </div>

          <h1 className="serif">
            Application
            <br />
            <em>Received.</em>
          </h1>

          <p>
            Thank you for your interest in partnering with
            SOVARA. Our team will review your application
            and get in touch with you.
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
        name="google-broker-submit"
        style={{ display: "none" }}
        title="Broker application submission"
      />

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="premium-broker-page-hero">
        <div className="container">

          <div className="premium-broker-page-label">
            <span>02</span>
            <span>FOR BROKERS</span>
            <span>DELHI • NOIDA</span>
          </div>

          <div className="premium-broker-page-heading">

            <div className="eyebrow">
              BUILD WITH SOVARA
            </div>

            <h1 className="serif">
              Build Your Real Estate
              <br />
              Business With <em>SOVARA.</em>
            </h1>

            <p>
              A focused partnership for independent brokers
              looking to access selected property opportunities
              and build trusted client relationships.
            </p>

          </div>

          <div className="premium-broker-hero-bottom">
            <span>INDEPENDENT BROKER NETWORK</span>
            <span>SELECTED PROPERTIES</span>
            <span>PROFESSIONAL PARTNERSHIP</span>
          </div>

        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP MODEL
          ===================================================== */}
      <section className="premium-broker-process">
        <div className="container">

          <div className="premium-broker-process-heading">

            <div className="eyebrow">
              THE PARTNERSHIP
            </div>

            <h2 className="serif">
              Simple.
              <br />
              Transparent.
              <br />
              <em>Professional.</em>
            </h2>

            <p>
              SOVARA works with independent brokers through
              a straightforward relationship built around
              selected property opportunities and clients.
            </p>

          </div>

          <div className="premium-broker-steps">

            <div className="premium-broker-step">
              <span>01</span>
              <h3>Join</h3>
              <p>
                Apply to become part of the SOVARA
                independent broker network.
              </p>
            </div>

            <div className="premium-broker-step">
              <span>02</span>
              <h3>Access</h3>
              <p>
                Access selected property opportunities
                available through SOVARA.
              </p>
            </div>

            <div className="premium-broker-step">
              <span>03</span>
              <h3>Connect</h3>
              <p>
                Bring your clients and introduce them
                to suitable property opportunities.
              </p>
            </div>

            <div className="premium-broker-step">
              <span>04</span>
              <h3>Transact</h3>
              <p>
                SOVARA supervises the transaction and
                coordinates the process.
              </p>
            </div>

            <div className="premium-broker-step">
              <span>05</span>
              <h3>Earn</h3>
              <p>
                On a successful deal, receive the
                agreed commission.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          APPLICATION
          ===================================================== */}
      <section className="premium-broker-application">
        <div className="container">

          <div className="premium-broker-application-grid">

            <div className="premium-broker-application-copy">

              <div className="eyebrow">
                BECOME A PARTNER
              </div>

              <h2 className="serif">
                Bring your
                <br />
                clients.
                <br />
                Build with
                <br />
                <em>SOVARA.</em>
              </h2>

              <p>
                Tell us a little about your real-estate
                experience and the market you operate in.
              </p>

            </div>

            <div className="premium-broker-form">

              <div className="eyebrow">
                BROKER APPLICATION
              </div>

              <form
                className="form"
                onSubmit={handleSubmit}
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
                  required
                />

                <input
                  name="city"
                  placeholder="City"
                  required
                />

                <select
                  name="experience"
                  required
                  defaultValue=""
                >
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

                <button
                  className="btn dark premium-broker-submit"
                  type="submit"
                >
                  Apply as Broker
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
      <section className="premium-broker-closing">
        <div className="container">

          <div className="eyebrow">
            SOVARA REALTY
          </div>

          <h2 className="serif">
            Better properties.
            <br />
            Better connections.
            <br />
            <em>Better business.</em>
          </h2>

        </div>
      </section>
    </>
  );
}
