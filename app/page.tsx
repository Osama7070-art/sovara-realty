import Link from "next/link";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero premium-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div className="container hero-content premium-hero-content">
          <div className="hero-topline">
            <span>SOVARA REALTY</span>
            <span>REAL ESTATE • INDIA</span>
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
            <span>Pan-India Vision</span>
          </div>
        </div>
      </section>

      {/* PROPERTY FINDER */}
      <section className="section premium-finder-section">
        <div className="container">
          <div className="finder-intro">
            <div>
              <div className="eyebrow">Find Your Property</div>

              <h2 className="serif">
                Discover the right
                <br />
                opportunity.
              </h2>
            </div>

            <p className="muted">
              Explore property opportunities by location, type and budget.
            </p>
          </div>

          <form
            className="property-search premium-property-search"
            action="/properties"
            method="GET"
          >
            <div className="search-field">
              <span>01</span>
              <select name="location" defaultValue="">
                <option value="">Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bengaluru">Bengaluru</option>
              </select>
            </div>

            <div className="search-field">
              <span>02</span>
              <select name="type" defaultValue="">
                <option value="">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div className="search-field">
              <span>03</span>
              <select name="budget" defaultValue="">
                <option value="">Budget</option>
                <option value="under-50">Under ₹50 Lakh</option>
                <option value="50-100">₹50 Lakh – ₹1 Cr</option>
                <option value="100-200">₹1 Cr – ₹2 Cr</option>
                <option value="200-plus">₹2 Cr+</option>
              </select>
            </div>

            <button className="btn dark search-button" type="submit">
              Search Properties <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
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
                Selected opportunities presented by SOVARA.
                Verified property information will be added before public
                listing.
              </p>

              <Link className="outline-link" href="/properties">
                View All Properties <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="grid premium-property-grid">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BROKER CTA */}
      <section className="premium-broker-section">
        <div className="container">
          <div className="broker-inner">
            <div className="broker-label">
              <span>04</span>
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

      {/* FINAL STATEMENT */}
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
