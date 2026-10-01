import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link href="/" className="footer-logo">
            CodeWith<span>_MT</span>
          </Link>

          <p>
            Building modern digital experiences,
            custom websites and powerful web
            solutions for brands, businesses and ideas.
          </p>

          <Link href="/contact" className="footer-project-link">
            Start a Project
            <FiArrowUpRight />
          </Link>

        </div>


        {/* NAVIGATION */}
        <div className="footer-column">

          <h4>Navigation</h4>

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/services">Services</Link>

          <Link href="/projects">Projects</Link>

          <Link href="/#faq">FAQ</Link>

          <Link href="/contact">Contact</Link>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h4>Services</h4>

          <span>Web Development</span>

          <span>Web Applications</span>

          <span>E-Commerce</span>

          <span>UI / UX Development</span>

          <span>Custom Solutions</span>

          <span>Frontend Development</span>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h4>Get In Touch</h4>

          <a href="mailto:contact@codewith-mt.com">
            <FiMail />
            contact@codewith-mt.com
          </a>

          <div className="footer-socials">

            <a
              href="#"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>

          </div>

        </div>

      </div>


      {/* =========================================
          BIG FOOTER TEXT
      ========================================= */}

      <div className="footer-big-text">
        CodeWith<span>_MT</span>
      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} CodeWith_MT.
          All rights reserved.
        </p>

        <p>
          Built with passion & technology.
        </p>

      </div>

    </footer>
  );
}