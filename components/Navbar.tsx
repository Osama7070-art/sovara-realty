"use client";

import Link from "next/link";
import { useState } from "react";

function SovaraMark() {
  return (
    <svg
      className="sovara-mark"
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <path
        d="M58 10H28C17 10 10 17 10 27c0 8 5 14 13 17l22 8c4 1 7 4 7 8 0 5-4 10-11 10H10"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
      />

      <path
        d="M22 70h30c11 0 18-7 18-17 0-8-5-14-13-17l-22-8c-4-1-7-4-7-8 0-5 4-10 11-10h31"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
      />

      <path
        d="M40 4v72"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav premium-nav">
      <div className="container nav-inner premium-nav-inner">

        {/* CENTERED SOVARA BRAND */}
        <Link
          href="/"
          className="logo premium-logo"
          onClick={closeMenu}
          aria-label="SOVARA REALTY Home"
        >
          <span className="sovara-logo-mark">
            <SovaraMark />
          </span>

          <span className="sovara-wordmark">
            SOVARA
            <span>REALTY</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-links premium-nav-links">
          <Link href="/">Home</Link>

          <Link href="/properties">
            Properties
          </Link>

          <Link href="/brokers">
            For Brokers
          </Link>

          <Link href="/list-your-property">
            List Property
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU */}
        <div className="premium-mobile-menu">

          <button
            type="button"
            className="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            <span>MENU</span>

            <span
              className={`menu-icon ${
                menuOpen ? "menu-icon-open" : ""
              }`}
              aria-hidden="true"
            >
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

          {menuOpen && (
            <div className="premium-mobile-panel">

              <div className="mobile-panel-label">
                SOVARA REALTY
              </div>

              <Link
                href="/"
                onClick={closeMenu}
              >
                Home
              </Link>

              <Link
                href="/properties"
                onClick={closeMenu}
              >
                Properties
              </Link>

              <Link
                href="/brokers"
                onClick={closeMenu}
              >
                For Brokers
              </Link>

              <Link
                href="/list-your-property"
                onClick={closeMenu}
              >
                List Property
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>

            </div>
          )}

        </div>

      </div>
    </header>
  );
}
