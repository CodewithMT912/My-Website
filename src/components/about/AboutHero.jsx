"use client";

import ScrollReveal from "../common/ScrollReveal";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <ScrollReveal direction="up">
      <section className="about-hero">

      <div className="about-hero-content">

        <div className="about-hero-label">
          <span></span>
          ABOUT CODEWITH_MT
        </div>

        <h1>
          More
          <br />
          Than <span>Code.</span>
        </h1>

        <p>
          Codewith_MT is a technology company focused on
          turning ambitious ideas into meaningful digital
          experiences, products and solutions.
        </p>

        <div className="about-hero-meta">

          <div>
            <span className="meta-line"></span>
            <span>BUILT WITH PURPOSE</span>
          </div>

          <div>
            <span className="meta-line"></span>
            <span>DRIVEN BY INNOVATION</span>
          </div>

        </div>

      </div>


      {/* VISUAL */}

      <div className="about-hero-visual">

        <div className="hero-orbit orbit-one"></div>

        <div className="hero-orbit orbit-two"></div>

        <div className="hero-orbit orbit-three"></div>

        <div className="hero-core">
          <span>&lt;/&gt;</span>
        </div>

      </div>


      {/* SCROLL INDICATOR */}

      <div className="about-scroll">

        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line">
          <span></span>
        </div>

      </div>

    </section>
    </ScrollReveal>
  );
}