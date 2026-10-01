"use client";

import ScrollReveal from "../common/ScrollReveal";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <ScrollReveal direction="up" delay={0.1}>
      <section className="who-we-are" id="who-we-are">

      <div className="who-we-are-container">

        {/* SECTION LABEL */}
        <div className="who-we-are-label">
          <span></span>
          WHO WE ARE
        </div>

        {/* MAIN CONTENT */}
        <div className="who-we-are-grid">

          {/* LEFT SIDE */}
          <div className="who-we-are-heading">
            <h2>
              Building
              <br />
              <span>Digital</span>
              <br />
              Possibilities.
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="who-we-are-content">

            <p className="who-we-are-intro">
              CodeWith_MT is a technology company focused on transforming
              ideas into modern digital experiences, powerful web applications,
              and meaningful online solutions.
            </p>

            <p>
              We believe technology should do more than simply work.
              It should communicate, solve problems, create opportunities,
              and help businesses move forward.
            </p>

            <p>
              From modern websites to custom web applications, we combine
              thoughtful design, clean development, and modern technologies
              to create digital products built around real-world needs.
            </p>

          </div>

        </div>

        {/* VALUES */}
        <div className="who-we-are-values">

          <div className="who-value">
            <div className="who-value-number">01</div>
            <div className="who-value-line"></div>
            <h3>VISION</h3>
            <p>
              To create digital experiences that inspire, connect,
              and move businesses forward.
            </p>
          </div>

          <div className="who-value">
            <div className="who-value-number">02</div>
            <div className="who-value-line"></div>
            <h3>MISSION</h3>
            <p>
              To turn ambitious ideas into reliable, modern,
              and impactful digital solutions.
            </p>
          </div>

          <div className="who-value">
            <div className="who-value-number">03</div>
            <div className="who-value-line"></div>
            <h3>VALUES</h3>
            <p>
              Creativity, quality, innovation, transparency,
              and continuous improvement.
            </p>
          </div>

        </div>

      </div>

    </section>
    </ScrollReveal>
  );
}