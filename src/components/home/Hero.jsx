"use client";



import Link from "next/link";
import { motion } from "framer-motion";

import "./Hero.css";
import ScrollReveal from "../common/ScrollReveal";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* =================================
            LEFT SIDE — COMPANY CONTENT
        ================================= */}

        <div className="hero-content">

          {/* BADGE */}
          <ScrollReveal direction="up">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              WELCOME TO CODEWITH_MT
            </div>
          </ScrollReveal>

          {/* TITLE */}
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="hero-title">
              We Build
              <span> Digital</span>
              <br />
              <span>Experiences</span>
              <br />
              That Matter.
            </h1>
          </ScrollReveal>

          {/* DESCRIPTION */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="hero-description">
              Codewith_MT is a digital solutions company focused on
              building modern websites, web applications and digital
              experiences that help businesses grow.
            </p>
          </ScrollReveal>

          {/* BUTTONS */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="hero-buttons">

              <Link
                href="#projects"
                className="hero-button primary"
              >
                Explore Our Work
                <span>↗</span>
              </Link>

              <Link
                href="#contact"
                className="hero-button secondary"
              >
                Let's Talk
                <span>↗</span>
              </Link>

            </div>
          </ScrollReveal>

          {/* STATS */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="hero-stats">

              <div className="hero-stat">
                <strong>10+</strong>
                <span>Projects</span>
              </div>

              <div className="hero-stat-line"></div>

              <div className="hero-stat">
                <strong>100%</strong>
                <span>Responsive</span>
              </div>

              <div className="hero-stat-line"></div>

              <div className="hero-stat">
                <strong>24/7</strong>
                <span>Support</span>
              </div>

            </div>
          </ScrollReveal>

        </div>


        {/* =================================
            RIGHT SIDE — ASTRONAUT
        ================================= */}

        <ScrollReveal direction="right" delay={0.2}>
          <div className="hero-visual">

            <div className="astronaut-glow"></div>

            <div className="astronaut-orbit"></div>

            <motion.img
              src="/astronaut.png"
              alt="Astronaut"
              className="astronaut-image"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}