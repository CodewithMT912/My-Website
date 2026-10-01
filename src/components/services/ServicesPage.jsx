"use client";

import Link from "next/link";
import {
  FiArrowUpRight,
  FiCode,
  FiGlobe,
  FiMonitor,
  FiShoppingBag,
  FiTrendingUp,
} from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./ServicesPage.css";

const serviceSections = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom websites and landing pages built for performance, clarity, and conversion.",
    points: [
      "Responsive design",
      "Fast loading pages",
      "SEO-friendly structure",
    ],
    icon: FiCode,
    accent: "#4da3ff",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Scalable digital tools and platforms built to streamline operations and improve user experience.",
    points: [
      "Business dashboards",
      "Custom portals",
      "Modern UI systems",
    ],
    icon: FiMonitor,
    accent: "#7c6cff",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Professional online stores designed to present products clearly and drive more sales.",
    points: [
      "Product-focused stores",
      "Conversion-ready UX",
      "Clean checkout flow",
    ],
    icon: FiShoppingBag,
    accent: "#27d3a3",
  },
  {
    number: "04",
    title: "Growth & Digital Strategy",
    description:
      "Marketing-focused digital solutions that turn attention into action and growth into momentum.",
    points: [
      "Launch strategy",
      "Social content systems",
      "Performance growth support",
    ],
    icon: FiTrendingUp,
    accent: "#ff9f43",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-container">
          <ScrollReveal direction="left">
            <div className="services-hero-copy">
              <div className="services-page-label">
                <span></span>
                SERVICES HERO
              </div>

              <h1>
                Digital Solutions
                <br />
                <span>Built For Growth.</span>
              </h1>

              <p>
                We create modern digital experiences, custom platforms, and business-first
                solutions that help brands launch, grow, and stand out online.
              </p>

              <div className="services-hero-actions">
                <Link href="/contact" className="services-primary-btn">
                  Start a Project
                  <FiArrowUpRight />
                </Link>

                <Link href="/#projects" className="services-secondary-btn">
                  View Work
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="services-hero-visual" aria-label="Technology visual">
              <div className="visual-orbit orbit-one"></div>
              <div className="visual-orbit orbit-two"></div>
              <div className="visual-orbit orbit-three"></div>

              <div className="visual-core">
                <FiGlobe />
              </div>

              <div className="visual-badge badge-top">UI / UX</div>
              <div className="visual-badge badge-bottom">Modern Tech</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="services-overview">
        <div className="services-overview-container">
          {serviceSections.map(({ number, title, description, points, icon: Icon, accent }, index) => (
            <ScrollReveal key={title} direction={index % 2 === 0 ? "up" : "down"} delay={index * 0.08}>
              <article className="service-feature-card" style={{ "--card-accent": accent }}>
                <div className="feature-top">
                  <span className="feature-number">{number}</span>
                  <div className="feature-icon">
                    <Icon />
                  </div>
                </div>

                <div className="feature-copy">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>

                <ul className="feature-points">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="services-summary">
        <div className="services-summary-container">
          <ScrollReveal direction="up">
            <div className="summary-header">
              <div className="services-page-label">
                <span></span>
                WHY CHOOSE US
              </div>

              <h2>
                Strategy, creativity, and execution
                <br />
                <span>working together.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="summary-grid">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="summary-card">
                <span>01</span>
                <h3>Clear Direction</h3>
                <p>Every solution is shaped around your business goals, audience, and real-world needs.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="summary-card">
                <span>02</span>
                <h3>Built To Grow</h3>
                <p>We create digital experiences that are flexible, scalable, and ready for future growth.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="summary-card">
                <span>03</span>
                <h3>Modern Execution</h3>
                <p>We combine thoughtful design, clean code, and modern digital strategy for lasting impact.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
