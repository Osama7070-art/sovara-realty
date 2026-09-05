"use client";

import { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

export default function Properties() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const location = params.get("location") || "";
    const type = params.get("type") || "";
    const budget = params.get("budget") || "";

    const hasFilters = location || type || budget;

    const filtered = properties.filter((property) => {
      if (!hasFilters) return true;

      const locationMatch =
        !location ||
        (property.location &&
          property.location !== "[PLACEHOLDER — TO BE PROVIDED]" &&
          property.location.toLowerCase().includes(location.toLowerCase()));

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
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">SOVARA REALTY</div>

          <h1>Properties</h1>

          <p className="muted">
            Selected opportunities. Verified information will be added before
            public listing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filteredProperties.length > 0 ? (
            <div className="grid">
              {filteredProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <p className="muted">
              No verified properties currently match your selected criteria.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
