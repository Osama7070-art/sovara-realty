import Link from "next/link";
import { Property } from "../data/properties";

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <article className="card premium-card">
      <Link
        href={`/properties/${property.id}`}
        className="premium-card-image-wrap"
      >
        <img
          className="card-img premium-card-img"
          src={property.image}
          alt={property.name}
        />

        <div className="premium-card-status">
          {property.status}
        </div>

        <div className="premium-card-arrow">↗</div>
      </Link>

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

        <Link
          className="premium-card-link"
          href={`/properties/${property.id}`}
        >
          View Property
          <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
