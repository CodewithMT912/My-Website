"use client";

import Link from "next/link";
import { FiArrowUpRight, FiCode } from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./aboutcta.css";

export default function AboutCTA() {
  return (
    <ScrollReveal direction="up" delay={0.1}>
      <section className="about-cta" id="about-cta">
      <div className="about-cta-container">

        {/* TOP LABEL */}
        <div className="about-cta-label">
          <span></span>
          LET'S BUILD SOMETHING
        </div>

        {/* MAIN CONTENT */}
        <div className="about-cta-content">

          <div className="about-cta-text">

            <h2>
              Have An
              <br />
              <span>Idea?</span>
            </h2>

            <p>
              Great digital products start with a conversation.
              Tell us what you're thinking, and let's turn your
              idea into something real.
            </p>

            <Link href="/#contact" className="about-cta-button">
              <span>Start A Conversation</span>
              <FiArrowUpRight />
            </Link>

          </div>

          {/* VISUAL */}
          <div className="about-cta-visual">

            <div className="cta-orbit cta-orbit-one"></div>
            <div className="cta-orbit cta-orbit-two"></div>
            <div className="cta-orbit cta-orbit-three"></div>

            <div className="cta-core">
              <FiCode />
            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="about-cta-bottom">

          <div className="cta-bottom-item">
            <span className="cta-bottom-line"></span>
            <span>DESIGN</span>
          </div>

          <div className="cta-bottom-item">
            <span className="cta-bottom-line"></span>
            <span>DEVELOP</span>
          </div>

          <div className="cta-bottom-item">
            <span className="cta-bottom-line"></span>
            <span>DELIVER</span>
          </div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}