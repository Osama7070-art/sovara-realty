import { notFound } from "next/navigation";
import Link from "next/link";
import { properties } from "../../../data/properties";

export default async function PropertyDetail({
  params,
}: {
  params: { id: string };
}) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) notFound();

  const isPublic =
    property.status === "DEMO PROPERTY" ||
    (property.listingStatus === "ACTIVE" &&
      property.verificationStatus === "VERIFIED");

  if (!isPublic) notFound();

  return (
    <>
      {/* =====================================================
          PROPERTY HERO
          ===================================================== */}
      <section className="premium-property-hero">
        <div className="container">

          <div className="premium-property-topline">
            <span>{property.status}</span>
            <span>SOVARA REALTY</span>
            <span>PROPERTY {property.id}</span>
          </div>

          <div className="premium-property-heading">
            <div className="eyebrow">SELECTED OPPORTUNITY</div>

            <h1 className="serif">
              {property.name}
            </h1>

            <p>
  {[
    property.locality,
    property.city,
    property.state,
  ]
    .filter(
      (value) =>
        value &&
        value !== "[PLACEHOLDER — TO BE PROVIDED]"
    )
    .join(" · ")}
</p>
          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN PROPERTY
          ===================================================== */}
      <section className="premium-property-main">
        <div className="container">

          <div className="premium-property-image-wrap">
            <img
              src={property.image}
              alt={property.name}
              className="premium-property-image"
            />

            <div className="premium-property-image-label">
              <span>SOVARA REALTY</span>
              <span>{property.status}</span>
            </div>
          </div>

          {/* =================================================
              OVERVIEW
              ================================================= */}
          <div className="premium-property-overview">

            <div>
              <span>CONFIGURATION</span>
              <strong>{property.configuration}</strong>
            </div>

            <div>
              <span>AREA</span>
              <strong>{property.area}</strong>
            </div>

            <div>
              <span>PRICE</span>
              <strong>{property.price}</strong>
            </div>

          </div>

          {/* =================================================
              INFORMATION + ENQUIRY
              ================================================= */}
          <div className="premium-property-grid">

            <main className="premium-property-content">

              <div className="premium-property-block">
                <div className="eyebrow">
                  THE PROPERTY
                </div>

                <h2 className="serif">
                  About the
                  <br />
                  Property.
                </h2>

                <p>
                  {property.description}
                </p>
              </div>

              <div className="premium-property-block premium-property-features">

                <div className="eyebrow">
                  FEATURES
                </div>

                <h2 className="serif">
                  Amenities.
                </h2>

                <ul>
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{amenity}</strong>
                    </li>
                  ))}
                </ul>

              </div>

            </main>

            {/* =================================================
                ENQUIRY PANEL
                ================================================= */}
            <aside className="premium-property-sidebar">

              <div className="premium-property-panel">

                <div className="eyebrow">
                  PROPERTY INFORMATION
                </div>

                <h3 className="serif">
                  {property.name}
                </h3>

                <div className="premium-property-info">

                  <div>
                    <span>Location</span>
                    <strong>{property.location}</strong>
                  </div>

                  <div>
                    <span>Developer</span>
                    <strong>{property.developer}</strong>
                  </div>

                  <div>
                    <span>Status</span>
                    <strong>{property.status}</strong>
                  </div>

                </div>

                <div className="premium-property-actions">

                  <Link
                    href="/contact"
                    className="btn dark"
                  >
                    Enquire Now
                    <span>↗</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="btn"
                  >
                    Request Site Visit
                    <span>↗</span>
                  </Link>

                </div>

                <div className="premium-property-note">
                  Property information is subject to verification
                  before public listing.
                </div>

              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}
      <section className="premium-property-closing">
        <div className="container">

          <div className="eyebrow">
            SOVARA REALTY
          </div>

          <h2 className="serif">
            Interested in this
            <br />
            <em>property?</em>
          </h2>

          <p>
            Speak with SOVARA for property information,
            enquiries or a site visit.
          </p>

          <Link
            href="/contact"
            className="outline-link"
          >
            Speak With SOVARA <span>↗</span>
          </Link>

        </div>
      </section>
    </>
  );
}
