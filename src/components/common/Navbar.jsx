"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Founder", href: "/founder" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-code">Codewith</span>
          <span className="logo-mt">_MT</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${isActiveLink(link.href) ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link href="/#contact" className="navbar-cta">
          Let's Talk
          <FiArrowUpRight />
        </Link>

        {/* MOBILE MENU BUTTON */}
      <button
  type="button"
  className="mobile-menu-button"
  onClick={() => {
    console.log("MENU CLICKED");
    alert("MENU CLICKED");
    setMenuOpen((prev) => !prev);
  }}
  aria-label="Toggle navigation"
  aria-expanded={menuOpen}
>
  {menuOpen ? <FiX /> : <FiMenu />}
</button>

      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <nav className="mobile-nav">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${isActiveLink(link.href) ? "active" : ""}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Let's Talk
            <FiArrowUpRight />
          </Link>

        </nav>
      )}
    </header>
  );
}