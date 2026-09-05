import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav premium-nav">
      <div className="container nav-inner premium-nav-inner">

        <Link href="/" className="logo premium-logo">
          SOVARA
          <span>REALTY</span>
        </Link>

        <nav className="nav-links premium-nav-links">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/brokers">For Brokers</Link>
          <Link href="/list-your-property">List Property</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <details className="mobile-menu-wrap premium-mobile-menu">
          <summary
            className="mobile-menu"
            style={{
              cursor: "pointer",
              listStyle: "none",
            }}
          >
            <span>MENU</span>
            <span className="menu-icon">+</span>
          </summary>

          <div className="premium-mobile-panel">
            <div className="mobile-panel-label">
              SOVARA REALTY
            </div>

            <Link href="/">Home</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/brokers">For Brokers</Link>
            <Link href="/list-your-property">List Property</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </details>

      </div>
    </header>
  );
}
