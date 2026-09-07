import Link from "next/link";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Home() {
  return (
    <>
      <section className="hero premium-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="container hero-content premium-hero-content">
          <div className="hero-topline">
            <span>SOVARA REALTY</span>
            <span>PAN-INDIA</span>
          </div>

          <div className="hero-copy">
            <div className="eyebrow">Exceptional Real Estate</div>

            <h1 className="serif">
              Exceptional Properties.
              <br />
              <em>Trusted Connections.</em>
            </h1>

            <p>
              A considered approach to real estate, connecting selected
              properties, independent brokers and buyers through clarity,
              trust and professional relationships.
            </p>

            <div className="actions">
              <Link className="btn light" href="/properties">
                Explore Properties
              </Link>

              <Link className="hero-text-link" href="/brokers">
                Partner With SOVARA <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="hero-bottom">
            <span>Selected Properties</span>
            <span>Independent Broker Network</span>
            <span>Across India</span>
          </div>
        </div>
      </section>

      <section className="section premium-properties-section">
        <div className="container">
          <div className="section-head premium-section-head">
            <div>
              <div className="eyebrow">Selected Opportunities</div>

              <h2 className="serif">
                Featured
                <br />
                Properties
              </h2>
            </div>

            <div className="section-side">
              <p className="muted">
                Selected property opportunities presented by SOVARA.
                Verified property information will be added before public
                listing.
              </p>

              <Link className="outline-link" href="/properties">
                View All Properties <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="grid premium-property-grid">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-broker-section">
        <div className="container">
          <div className="broker-inner">
            <div className="broker-label">
              <span>02</span>
              <span>FOR BROKERS</span>
            </div>

            <div className="broker-content">
              <div>
                <div className="eyebrow">Build With SOVARA</div>

                <h2 className="serif">
                  Build Your Real Estate
                  <br />
                  Business With <em>SOVARA.</em>
                </h2>
              </div>

              <div className="broker-copy">
                <p>
                  Join the network, access selected properties, bring your
                  clients and work with SOVARA through the transaction.
                </p>

                <Link className="btn light" href="/brokers">
                  Become a Partner <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-closing-section">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>

          <h2 className="serif">
            Property is personal.
            <br />
            <em>The connection should be trusted.</em>
          </h2>

          <Link className="outline-link" href="/contact">
            Speak With SOVARA <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
