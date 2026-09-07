"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav premium-nav">
      <div className="container nav-inner premium-nav-inner">

        <Link
          href="/"
          className="logo premium-logo"
          onClick={closeMenu}
          aria-label="SOVARA REALTY Home"
        >
          <img
            src="/brand/sovara-logo-light-transparent.png"
            alt="SOVARA REALTY"
            className="sovara-image-logo"
          />
        </Link>

        <nav className="nav-links premium-nav-links">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/brokers">For Brokers</Link>
          <Link href="/list-your-property">List Property</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="premium-mobile-menu">
          <button
            type="button"
            className="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span>MENU</span>

            <span
              className={`menu-icon ${menuOpen ? "menu-icon-open" : ""}`}
              aria-hidden="true"
            >
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

          {menuOpen && (
            <div className="premium-mobile-panel">
              <div className="mobile-panel-label">SOVARA REALTY</div>

              <Link href="/" onClick={closeMenu}>Home</Link>
              <Link href="/properties" onClick={closeMenu}>Properties</Link>
              <Link href="/brokers" onClick={closeMenu}>For Brokers</Link>
              <Link
                href="/list-your-property"
                onClick={closeMenu}
              >
                List Property
              </Link>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
