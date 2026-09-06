import Link from "next/link";
import { Property } from "../data/properties";

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <article className="card premium-card">
      {/* PROPERTY IMAGE */}
      <Link
        href={`/properties/${property.id}`}
        className="premium-card-image-wrap"
        aria-label={`View ${property.name}`}
      >
        <img
          className="card-img premium-card-img"
          src={property.image}
          alt={property.name}
          loading="lazy"
        />

        {/* STATUS */}
        <div className="premium-card-status">
          {property.status}
        </div>

        {/* ARROW */}
        <div
          className="premium-card-arrow"
          aria-hidden="true"
        >
          ↗
        </div>
      </Link>

      {/* PROPERTY INFORMATION */}
      <div className="card-body premium-card-body">

        <div className="premium-card-location">
          {property.location}
        </div>

        <h3>{property.name}</h3>

        <div className="meta premium-card-meta">
          <span>{property.configuration}</span>
          <span>{property.area}</span>
          <span>{property.price}</span>
        </div>

        <div className="premium-card-footer">
          <Link
            className="premium-card-link"
            href={`/properties/${property.id}`}
          >
            <span>View Property</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </article>
  );
}
