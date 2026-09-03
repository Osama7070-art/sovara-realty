import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">SOVARA REALTY</Link>
        <nav className="nav-links">
          <Link href="/properties">Properties</Link>
          <Link href="/brokers">For Brokers</Link>
          <Link href="/list-your-property">List Property</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <span className="mobile-menu">MENU</span>
      </div>
    </header>
  );
}