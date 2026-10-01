"use client";

import "./ContactPage.css";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

export default function ContactPage() {
  const whatsappNumber = "923704060104";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const socialLinks = [
    {
      name: "Instagram",
      handle: "codewith-mt",
      href: "https://instagram.com/codewith-mt",
      icon: FiInstagram,
      accent: "#E1306C",
    },
    {
      name: "LinkedIn",
      handle: "Codewith_MT / Muhammad Talha",
      href: "https://www.linkedin.com/in/codewith-mt-muhammad-talha",
      icon: FiLinkedin,
      accent: "#0A66C2",
    },
    {
      name: "Facebook",
      handle: "Muhammad Talha Tanveer",
      href: "https://facebook.com/muhammad.talha.tanveer",
      icon: FiFacebook,
      accent: "#1877F2",
    },
    {
      name: "YouTube",
      handle: "Codewith_MT",
      href: "https://youtube.com/@codewith_mt",
      icon: FiYoutube,
      accent: "#FF0000",
    },
  ];

  return (
    <main className="contact-page">
      <div className="contact-page-container">
        <div className="contact-page-label">
          <span></span>
          GET IN TOUCH
        </div>

        <div className="contact-page-heading">
          <h1>
            Let's Build
            <br />
            <span>Something Great.</span>
          </h1>

          <p>
            Have a project idea, business website or digital solution in mind? Let's talk
            about it.
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-card"
        >
          <div className="whatsapp-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.59 5.93L.15 24l6.38-1.67a11.8 11.8 0 0 0 5.55 1.41h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.41-8.42ZM12.09 21.73h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.51-5.23C2.18 6.41 6.62 1.97 12.08 1.97a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.87 9.87Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="whatsapp-content">
            <span>CHAT WITH US</span>
            <h2>WhatsApp</h2>
            <p>Start a conversation with Codewith_MT directly on WhatsApp.</p>
            <strong>0370 4060104</strong>
          </div>

          <div className="whatsapp-arrow">
            <FiArrowUpRight />
          </div>
        </a>

        <div className="social-links-wrap">
          <div className="social-links-header">
            <span></span>
            SOCIAL CHANNELS
          </div>

          <div className="social-links-grid">
            {socialLinks.map(({ name, handle, href, icon: Icon, accent }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-card"
                style={{ "--social-accent": accent }}
              >
                <div className="social-icon-box">
                  <Icon />
                </div>

                <div className="social-text">
                  <span>{name}</span>
                  <strong>{handle}</strong>
                </div>

                <div className="social-arrow">
                  <FiArrowUpRight />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-page-bottom">
          <span></span>
          <p>We're ready to hear about your idea.</p>
        </div>
      </div>
    </main>
  );
}