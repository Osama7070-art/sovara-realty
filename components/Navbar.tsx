import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav" style={{ position: "relative" }}>
      <div className="container nav-inner">
        <Link href="/" className="logo">
          SOVARA REALTY
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/brokers">For Brokers</Link>
          <Link href="/list-your-property">List Property</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <details className="mobile-menu-wrap">
          <summary
            className="mobile-menu"
            style={{ cursor: "pointer", listStyle: "none" }}
          >
            MENU
          </summary>

          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#f7f6f2",
              borderTop: "1px solid #ddd",
              padding: "24px",
              display: "grid",
              gap: "20px",
              zIndex: 100,
            }}
          >
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
