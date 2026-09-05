"use client";

import { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

export default function Properties() {
  const [filteredProperties, setFilteredProperties] = useState(
    properties.filter(
      (property) =>
        property.status === "DEMO PROPERTY" ||
        (property.listingStatus === "ACTIVE" &&
          property.verificationStatus === "VERIFIED")
    )
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const location = params.get("location") || "";
    const type = params.get("type") || "";
    const budget = params.get("budget") || "";

    const hasFilters = location || type || budget;

    const publicProperties = properties.filter(
      (property) =>
        property.status === "DEMO PROPERTY" ||
        (property.listingStatus === "ACTIVE" &&
          property.verificationStatus === "VERIFIED")
    );

    const filtered = publicProperties.filter((property) => {
      if (!hasFilters) return true;

      const locationMatch =
        !location ||
        (property.location &&
          property.location !== "[PLACEHOLDER — TO BE PROVIDED]" &&
          property.location
            .toLowerCase()
            .includes(location.toLowerCase()));

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
            property.priceValue >= 50 && property.priceValue < 100;
        } else if (budget === "100-200") {
          budgetMatch =
            property.priceValue >= 100 && property.priceValue < 200;
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
      <section className="properties-page-hero">
        <div className="container">
          <div className="properties-page-label">
            <span>01</span>
            <span>SOVARA REALTY</span>
          </div>

          <h1>
            Selected
            <br />
            Properties.
          </h1>

          <div className="properties-page-intro">
            <p>
              A considered selection of property opportunities.
              Verified information will be added before public listing.
            </p>
          </div>
        </div>
      </section>

      <section className="properties-list-section">
        <div className="container">
          <div className="properties-list-header">
            <div>
              <div className="eyebrow">CURRENT SELECTION</div>
              <h2>Explore Properties</h2>
            </div>

            <div className="properties-count">
              {filteredProperties.length
                .toString()
                .padStart(2, "0")}{" "}
              PROPERTIES
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
            <div className="properties-empty">
              <div className="properties-empty-number">00</div>

              <h3>No matching properties.</h3>

              <p>
                No verified properties currently match your
                selected criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="properties-closing">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>

          <h2>
            The right property
            <br />
            begins with the right
            <br />
            connection.
          </h2>
        </div>
      </section>
    </>
  );
}
