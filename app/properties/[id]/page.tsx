import { notFound } from "next/navigation";
import Link from "next/link";
import { properties } from "../../../data/properties";

export default async function PropertyDetail({ params }: { params: { id: string } }) {
  const property = properties.find(p=>p.id===params.id); if(!property) notFound();
  return <><section className="page-hero"><div className="container"><div className="eyebrow">{property.status}</div><h1>{property.name}</h1><p className="muted">{property.location}</p></div></section><section className="section"><div className="container two-col"><div><img className="detail-img" src={property.image} alt={property.name}/><h2 className="serif">About the Property</h2><p>{property.description}</p><h3>Amenities</h3><ul className="list">{property.amenities.map((a,i)=><li key={i}>{a}</li>)}</ul></div><aside><div className="card-body"><div className="eyebrow">Property Information</div><div className="meta"><span>{property.configuration}</span><span>{property.area}</span><span>{property.price}</span></div><p className="muted">Developer: {property.developer}</p><div className="actions"><Link className="btn dark" href="/contact">Enquire Now</Link><Link className="btn" href="/contact">Request Site Visit</Link></div></div></aside></div></section></>;
}