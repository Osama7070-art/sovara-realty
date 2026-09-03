import Link from "next/link";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-bg" /><div className="hero-overlay" />
      <div className="container hero-content">
        <div className="eyebrow">SOVARA REALTY</div>
        <h1 className="serif">Exceptional Properties.<br/>Trusted Connections.</h1>
        <p>A premium real-estate connection platform bringing selected properties, independent brokers and buyers together with clarity and trust.</p>
        <div className="actions"><Link className="btn light" href="/properties">Explore Properties</Link><Link className="btn" href="/brokers">Partner With SOVARA</Link></div>
      </div>
    </section>
    <section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">Selected Opportunities</div><h2 className="serif">Featured Properties</h2></div><Link className="btn" href="/properties">View All</Link></div>
      <div className="grid">{properties.map(p=><PropertyCard key={p.id} property={p}/>)}</div>
    </div></section>
    <section className="section band"><div className="container two-col"><div><div className="eyebrow">For Brokers</div><h2 className="serif">Build Your Real Estate Business With SOVARA</h2></div><div><p className="muted">Join the network, access selected properties, bring your clients and work with SOVARA through the transaction.</p><Link className="btn light" href="/brokers">Become a Partner</Link></div></div></section>
  </>;
}