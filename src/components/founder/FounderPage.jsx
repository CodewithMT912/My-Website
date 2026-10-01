"use client";

import Link from "next/link";
import { FiArrowUpRight, FiAward, FiCompass, FiFlag, FiRocket } from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./FounderPage.css";

const milestones = [
  {
    year: "2018",
    title: "The First Spark",
    description: "Started exploring design and digital tools, developing a passion for building experiences that solve real problems.",
  },
  {
    year: "2020",
    title: "Learning & Growth",
    description: "Focused on improving technical skills, understanding product thinking, and refining the craft behind digital work.",
  },
  {
    year: "2022",
    title: "Codewith_MT Begins",
    description: "Turned the vision into a brand focused on helping businesses and ideas become visible, modern, and impactful online.",
  },
  {
    year: "Today",
    title: "Building With Purpose",
    description: "Working with clients to turn concepts into professional digital products that create clarity, trust, and growth.",
  },
];

export default function FounderPage() {
  return (
    <main className="founder-page">
      <section className="founder-hero">
        <div className="founder-hero-container">
          <ScrollReveal direction="left">
            <div className="founder-hero-copy">
              <div className="founder-label">
                <span></span>
                FOUNDER HERO
              </div>

              <h1>
                Muhammad
                <br />
                <span>Talha</span>
              </h1>

              <p>
                I build digital experiences that help ideas become real, memorable,
                and growth-focused brands. Codewith_MT exists to turn thoughtful vision into modern, powerful solutions.
              </p>

              <div className="founder-hero-actions">
                <Link href="/contact" className="founder-primary-btn">
                  Let’s Talk
                  <FiArrowUpRight />
                </Link>

                <Link href="/projects" className="founder-secondary-btn">
                  View Work
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="founder-hero-visual">
              <div className="founder-photo-frame">
                <img src="" alt="Founder portrait" />
              </div>

              <div className="founder-tag tag-one">Founder</div>
              <div className="founder-tag tag-two">Builder</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="founder-story">
        <div className="founder-story-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="founder-label">
                <span></span>
                FOUNDER STORY
              </div>

              <h2>
                Building with
                <br />
                <span>purpose, design, and grit.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="story-grid">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="story-text-card">
                <p>
                  My journey started with curiosity. I wanted to understand how ideas turn
                  into products, brands, and digital experiences that people trust and remember.
                </p>
                <p>
                  Over time, that curiosity turned into a deep passion for design, coding,
                  product thinking, and building meaningful digital solutions for real-world goals.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="story-quote-card">
                <span className="quote-mark">“</span>
                <p>
                  Great digital work is not just about aesthetics — it is about clarity,
                  strategy, and making a real impact.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="founder-values">
        <div className="founder-values-container">
          <div className="value-card value-large">
            <ScrollReveal direction="left">
              <div>
                <div className="founder-label">
                  <span></span>
                  VISION & MISSION
                </div>

                <h3>Vision</h3>
                <p>
                  To help businesses and ideas thrive through elegant, modern digital experiences that create trust and momentum.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="value-card value-large">
            <ScrollReveal direction="right" delay={0.1}>
              <div>
                <div className="founder-label">
                  <span></span>
                  FOUNDER PHILOSOPHY
                </div>

                <h3>Mission</h3>
                <p>
                  To build digital products with clarity, quality, and intention — helping brands stand out with technology that genuinely works.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="founder-journey">
        <div className="founder-journey-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="founder-label">
                <span></span>
                JOURNEY / MILESTONES
              </div>

              <h2>
                The path behind
                <br />
                <span>Codewith_MT.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="journey-timeline">
            {milestones.map((item, index) => (
              <ScrollReveal key={item.year} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <span></span>
                  </div>

                  <div className="timeline-card">
                    <div className="timeline-top">
                      <span>{item.year}</span>
                      <FiAward />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-cta">
        <div className="founder-cta-container">
          <ScrollReveal direction="up">
            <div className="founder-cta-box">
              <div className="founder-label">
                <span></span>
                FINAL CTA
              </div>

              <h2>
                Ready to build something
                <br />
                <span>meaningful?</span>
              </h2>

              <p>
                Let’s turn your idea into a product, experience, or digital presence that stands out and grows with purpose.
              </p>

              <Link href="/contact" className="founder-primary-btn">
                Start a Conversation
                <FiArrowUpRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
