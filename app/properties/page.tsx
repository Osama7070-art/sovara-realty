"use client";

import { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

export default function Properties() {
  const publicProperties = properties.filter(
    (property) =>
      property.status === "DEMO PROPERTY" ||
      (property.listingStatus === "ACTIVE" &&
        property.verificationStatus === "VERIFIED")
  );

  const [filteredProperties, setFilteredProperties] =
    useState(publicProperties);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const location = params.get("location") || "";
    const type = params.get("type") || "";
    const budget = params.get("budget") || "";

    const hasFilters = location || type || budget;

    const filtered = publicProperties.filter((property) => {
      if (!hasFilters) return true;

      const searchLocation = location.toLowerCase().trim();

const locationMatch =
  !searchLocation ||
  [
    property.location,
    property.locality,
    property.city,
    property.state,
  ]
    .filter(
      (value) =>
        value &&
        value !== "[PLACEHOLDER — TO BE PROVIDED]"
    )
    .some((value) =>
      value.toLowerCase().includes(searchLocation)
    );

      const typeMatch =
        !type ||
        (property.propertyType &&
          property.propertyType !== "[PLACEHOLDER — TO BE PROVIDED]" &&
          property.propertyType.toLowerCase() === type.toLowerCase());

      let budgetMatch = !budget;

      if (budget) {
        if (typeof property.priceValue !== "number") {
          budgetMatch = false;
        } else if (budget === "under-50") {
          budgetMatch = property.priceValue < 50;
        } else if (budget === "50-100") {
          budgetMatch =
            property.priceValue >= 50 &&
            property.priceValue < 100;
        } else if (budget === "100-200") {
          budgetMatch =
            property.priceValue >= 100 &&
            property.priceValue < 200;
        } else if (budget === "200-plus") {
          budgetMatch = property.priceValue >= 200;
        }
      }

      return locationMatch && typeMatch && budgetMatch;
    });

    setFilteredProperties(filtered);
  }, []);

  return (
    <>
      {/* =====================================================
          PROPERTIES HERO
          ===================================================== */}
      <section className="properties-page-hero premium-properties-hero">
        <div className="container">
          <div className="properties-page-label">
            <span>01</span>
            <span>SOVARA REALTY</span>
            <span>PAN-INDIA</span>
          </div>

          <div className="properties-hero-content">
            <div className="eyebrow">
              SELECTED OPPORTUNITIES
            </div>

            <h1 className="serif">
              Selected
              <br />
              <em>Properties.</em>
            </h1>

            <p>
              A considered selection of property opportunities
              presented by SOVARA. Verified information is added
              before public listing.
            </p>
          </div>

          <div className="properties-hero-bottom">
            <span>ACROSS INDIA</span>
            <span>SELECTED PROPERTIES</span>
            <span>
              {filteredProperties.length
                .toString()
                .padStart(2, "0")}{" "}
              OPPORTUNITIES
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY COLLECTION
          ===================================================== */}
      <section className="properties-list-section premium-properties-list">
        <div className="container">
          <div className="properties-list-header premium-list-header">
            <div>
              <div className="eyebrow">
                CURRENT SELECTION
              </div>

              <h2 className="serif">
                Explore the
                <br />
                Collection.
              </h2>
            </div>

            <div className="properties-list-intro">
              <p>
                SOVARA presents selected opportunities through
                a focused and transparent property collection.
              </p>

              <div className="properties-count">
                {filteredProperties.length
                  .toString()
                  .padStart(2, "0")}{" "}
                PROPERTIES
              </div>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="properties-premium-grid">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          ) : (
            <div className="properties-empty premium-properties-empty">
              <div className="properties-empty-number">
                00
              </div>

              <h3>No matching properties.</h3>

              <p>
                No verified properties currently match your
                selected criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          LIST PROPERTY CTA
          ===================================================== */}
      <section className="properties-owner-cta">
        <div className="container">
          <div className="properties-owner-inner">
            <div className="eyebrow">
              DEVELOPERS & PROPERTY OWNERS
            </div>

            <h2 className="serif">
              Have a property
              <br />
              to <em>sell?</em>
            </h2>

            <p>
              Share your property or project with SOVARA for
              review and consideration.
            </p>

            <a
              href="/list-your-property"
              className="outline-link"
            >
              List Your Property <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
          ===================================================== */}
      <section className="properties-closing premium-properties-closing">
        <div className="container">
          <div className="eyebrow">
            SOVARA REALTY
          </div>

          <h2 className="serif">
            The right property
            <br />
            begins with the right
            <br />
            <em>connection.</em>
          </h2>

          <a
            href="/contact"
            className="outline-link"
          >
            Speak With SOVARA <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
