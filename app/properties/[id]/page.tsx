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

  // Demo properties remain visible for website presentation.
  // Real properties require both ACTIVE listing status and VERIFIED information.
  const isPublic =
    property.status === "DEMO PROPERTY" ||
    (property.listingStatus === "ACTIVE" &&
      property.verificationStatus === "VERIFIED");

  if (!isPublic) notFound();

  return (
    <>
      {/* PROPERTY INTRO */}
      <section className="property-detail-intro">
        <div className="container">
          <div className="property-detail-topline">
            <span>{property.status}</span>
            <span>SOVARA REALTY</span>
          </div>

          <h1>{property.name}</h1>

          <p className="property-detail-location">
            {property.location}
          </p>
        </div>
      </section>

      {/* PROPERTY CONTENT */}
      <section className="section property-detail-section">
        <div className="container property-detail-layout">

          {/* LEFT */}
          <div className="property-detail-main">

            <div className="property-detail-image-wrap">
              <img
                className="property-detail-image"
                src={property.image}
                alt={property.name}
              />
            </div>

            <div className="property-detail-overview">
              <div>
                <span>Configuration</span>
                <strong>{property.configuration}</strong>
              </div>

              <div>
                <span>Area</span>
                <strong>{property.area}</strong>
              </div>

              <div>
                <span>Price</span>
                <strong>{property.price}</strong>
              </div>
            </div>

            <div className="property-detail-copy">
              <div className="eyebrow">THE PROPERTY</div>

              <h2>About the Property</h2>

              <p>{property.description}</p>
            </div>

            <div className="property-detail-amenities">
              <div className="eyebrow">FEATURES</div>

              <h2>Amenities</h2>

              <ul>
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="property-detail-sidebar">

            <div className="property-enquiry-box">

              <div className="eyebrow">
                PROPERTY INFORMATION
              </div>

              <h3>{property.name}</h3>

              <div className="property-info-list">

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

              <div className="property-detail-actions">

                <Link
                  className="btn dark"
                  href="/contact"
                >
                  Enquire Now
                </Link>

                <Link
                  className="btn"
                  href="/contact"
                >
                  Request Site Visit
                </Link>

              </div>

              <p className="property-trust-note">
                Property information is subject to verification
                before public listing.
              </p>

            </div>

          </aside>
        </div>
      </section>
    </>
  );
}
