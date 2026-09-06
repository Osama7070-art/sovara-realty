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
      form.elements.namedItem("experience") as HTMLInputElement
    ).value;
    const details = (
      form.elements.namedItem("details") as HTMLTextAreaElement
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
      ["entry.484645838", details],
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
          <div className="eyebrow">SOVARA REALTY</div>

          <div className="broker-success-number">02</div>

          <h1 className="serif">
            Application
            <br />
            <em>Received.</em>
          </h1>

          <p>
            Thank you for your interest in joining the SOVARA broker network.
            Our team will review your details and get in touch with you.
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
        name="google-broker-submit"
        style={{ display: "none" }}
        title="Broker application submission"
      />

      {/* HERO */}

      <section className="premium-broker-page-hero">
        <div className="container">
          <div className="premium-broker-page-label">
            <span>02</span>
            <span>FOR BROKERS</span>
            <span>SOVARA REALTY</span>
          </div>

          <div className="premium-broker-page-heading">
            <div className="eyebrow">BROKER NETWORK</div>

            <h1 className="serif">
              Build Your Real Estate
              <br />
              Business With <em>SOVARA.</em>
            </h1>

            <p>
              Join an independent broker network built around selected
              property opportunities, professional relationships and a clear
              transaction process.
            </p>
          </div>

          <div className="premium-broker-page-hero-bottom">
            <span>SELECTED PROPERTIES</span>
            <span>INDEPENDENT BROKERS</span>
            <span>PROFESSIONAL NETWORK</span>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="premium-broker-intro">
        <div className="container premium-broker-intro-grid">
          <div className="premium-broker-intro-side">
            <div className="eyebrow">01 — THE OPPORTUNITY</div>
          </div>

          <div className="premium-broker-intro-content">
            <h2 className="serif">
              Better properties.
              <br />
              Better access.
              <br />
              Better <em>connections.</em>
            </h2>

            <p>
              SOVARA works with selected developers and property owners and
              makes suitable opportunities available through an independent
              broker network.
            </p>

            <p>
              You bring your clients and market relationships. SOVARA
              coordinates the selected property opportunity and supervises
              the transaction journey.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="premium-broker-process">
        <div className="container">
          <div className="premium-broker-process-heading">
            <div className="eyebrow">02 — HOW IT WORKS</div>

            <h2 className="serif">
              A simple
              <br />
              <em>process.</em>
            </h2>
          </div>

          <div className="premium-broker-process-steps">
            <div className="premium-broker-process-step">
              <span>01</span>

              <h3>Join the Network</h3>

              <p>
                Submit your details and apply to work with SOVARA as an
                independent broker.
              </p>
            </div>

            <div className="premium-broker-process-step">
              <span>02</span>

              <h3>Access Selected Properties</h3>

              <p>
                Explore suitable property opportunities made available
                through the SOVARA network.
              </p>
            </div>

            <div className="premium-broker-process-step">
              <span>03</span>

              <h3>Bring Your Clients</h3>

              <p>
                Introduce relevant opportunities to buyers from your own
                professional network.
              </p>
            </div>

            <div className="premium-broker-process-step">
              <span>04</span>

              <h3>Work Through the Transaction</h3>

              <p>
                SOVARA supervises the transaction process while the broker
                continues working with the client.
              </p>
            </div>

            <div className="premium-broker-process-step">
              <span>05</span>

              <h3>Successful Deal</h3>

              <p>
                On a successful transaction, the agreed commission arrangement
                applies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SOVARA */}

      <section className="premium-broker-benefits">
        <div className="container premium-broker-benefits-grid">
          <div className="premium-broker-benefits-heading">
            <div className="eyebrow">03 — WHY SOVARA</div>

            <h2 className="serif">
              Built for
              <br />
              independent
              <br />
              <em>brokers.</em>
            </h2>
          </div>

          <div className="premium-broker-benefits-list">
            <div>
              <span>01</span>

              <div>
                <h3>Selected Opportunities</h3>

                <p>
                  Focus on selected property opportunities instead of an
                  overcrowded property catalogue.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <h3>Independent Relationships</h3>

                <p>
                  Continue building and managing your own client
                  relationships as an independent broker.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <h3>Clear Process</h3>

                <p>
                  Work through a defined process from property opportunity to
                  transaction.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>

              <div>
                <h3>Professional Coordination</h3>

                <p>
                  SOVARA coordinates the selected opportunity and supervises
                  the transaction journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION */}

      <section className="premium-broker-application">
        <div className="container premium-broker-application-grid">
          <div className="premium-broker-application-copy">
            <div className="eyebrow">04 — JOIN SOVARA</div>

            <h2 className="serif">
              Ready to build
              <br />
              with <em>SOVARA?</em>
            </h2>

            <p>
              Share your details with us. Our team will review your
              application before confirming your participation in the broker
              network.
            </p>

            <div className="premium-broker-application-notes">
              <div>
                <span>01</span>

                <p>
                  Application does not automatically confirm network
                  membership.
                </p>
              </div>

              <div>
                <span>02</span>

                <p>
                  Broker participation and commission terms are subject to
                  agreement with SOVARA.
                </p>
              </div>
            </div>
          </div>

          <div className="premium-broker-form-wrap">
            <div className="eyebrow">BROKER DETAILS</div>

            <form
              className="premium-broker-form"
              onSubmit={handleSubmit}
            >
              <div className="premium-broker-field">
                <span>01</span>

                <input
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="premium-broker-field">
                <span>02</span>

                <input
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="premium-broker-field">
                <span>03</span>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="premium-broker-field">
                <span>04</span>

                <input
                  name="city"
                  placeholder="City"
                  required
                />
              </div>

              <div className="premium-broker-field">
                <span>05</span>

                <input
                  name="experience"
                  placeholder="Real Estate Experience"
                  required
                />
              </div>

              <div className="premium-broker-field premium-broker-field-message">
                <span>06</span>

                <textarea
                  name="details"
                  placeholder="Tell us about your work / client network"
                  rows={7}
                  required
                />
              </div>

              <button
                className="btn dark premium-broker-submit"
                type="submit"
              >
                Apply as a Broker
                <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}

      <section className="premium-broker-transparency">
        <div className="container">
          <div className="eyebrow">05 — TRANSPARENCY</div>

          <h2 className="serif">
            Independent
            <br />
            by nature.
            <br />
            <em>Connected by SOVARA.</em>
          </h2>

          <div className="premium-broker-transparency-copy">
            <p>
              Brokers working with SOVARA remain independent professionals.
              SOVARA provides access to selected property opportunities and
              coordinates the relevant transaction process.
            </p>

            <p>
              Property ownership, development and brokerage roles remain
              distinct. Commission arrangements are agreed for successful
              transactions and are not represented as automatic earnings.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}

      <section className="premium-broker-closing">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>

          <h2 className="serif">
            Your network.
            <br />
            Your clients.
            <br />
            <em>One stronger connection.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
