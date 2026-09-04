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
    <section className="section">
  <div className="container">
    <div className="eyebrow">Find Your Property</div>
    <h2 className="serif">Discover the Right Opportunity</h2>

    <form className="property-search" action="/properties" method="GET">
  <select name="location" defaultValue="">
    <option value="">Location</option>
    <option value="Delhi">Delhi</option>
    <option value="Noida">Noida</option>
    <option value="Gurugram">Gurugram</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Bengaluru">Bengaluru</option>
  </select>

  <select name="type" defaultValue="">
    <option value="">Property Type</option>
    <option value="Apartment">Apartment</option>
    <option value="Villa">Villa</option>
    <option value="Plot">Plot</option>
    <option value="Commercial">Commercial</option>
  </select>

  <select name="budget" defaultValue="">
    <option value="">Budget</option>
    <option value="under-50">Under ₹50 Lakh</option>
    <option value="50-100">₹50 Lakh – ₹1 Cr</option>
    <option value="100-200">₹1 Cr – ₹2 Cr</option>
    <option value="200-plus">₹2 Cr+</option>
  </select>

  <button className="btn" type="submit">
    Search Properties
  </button>
</form>
      <select>
        <option>Location</option>
        <option>Delhi</option>
        <option>Noida</option>
        <option>Gurugram</option>
        <option>Mumbai</option>
        <option>Bengaluru</option>
      </select>

      <select>
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Plot</option>
        <option>Commercial</option>
      </select>

      <select>
        <option>Budget</option>
        <option>Under ₹50 Lakh</option>
        <option>₹50 Lakh – ₹1 Cr</option>
        <option>₹1 Cr – ₹2 Cr</option>
        <option>₹2 Cr+</option>
      </select>

      <Link className="btn" href="/properties">
        Search Properties
      </Link>
    </div>
  </div>
</section>
    <section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">Selected Opportunities</div><h2 className="serif">Featured Properties</h2></div><Link className="btn" href="/properties">View All</Link></div>
      <div className="grid">{properties.map(p=><PropertyCard key={p.id} property={p}/>)}</div>
    </div></section>
    <section className="section band"><div className="container two-col"><div><div className="eyebrow">For Brokers</div><h2 className="serif">Build Your Real Estate Business With SOVARA</h2></div><div><p className="muted">Join the network, access selected properties, bring your clients and work with SOVARA through the transaction.</p><Link className="btn light" href="/brokers">Become a Partner</Link></div></div></section>
  </>;
}
