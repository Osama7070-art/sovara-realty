import Link from "next/link";
import { Property } from "../data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return <article className="card">
    <img className="card-img" src={property.image} alt={property.name} />
    <div className="card-body">
      <div className="eyebrow">{property.status}</div>
      <h3>{property.name}</h3>
      <div className="muted">{property.location}</div>
      <div className="meta"><span>{property.configuration}</span><span>{property.area}</span><span>{property.price}</span></div>
      <div className="actions"><Link className="btn dark" href={`/properties/${property.id}`}>View Property</Link></div>
    </div>
  </article>;
}