"use client";

import "./Contact.css";
import ScrollReveal from "../common/ScrollReveal";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* TOP LABEL */}

        <ScrollReveal direction="up">
          <div className="contact-label">
            <span></span>
            LET'S BUILD SOMETHING GREAT
          </div>
        </ScrollReveal>


        {/* MAIN HEADING */}

        <ScrollReveal direction="up" delay={0.1}>
          <div className="contact-heading">

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p>
              Whether you need a custom website, web application,
              e-commerce platform or another digital solution,
              our team is ready to turn your idea into reality.
            </p>

          </div>
        </ScrollReveal>


        {/* CONTACT CARDS */}

        <div className="contact-grid">

          {/* PROJECT CARD */}

          <ScrollReveal direction="left" delay={0.15}>
            <div className="contact-card contact-card-main">

              <div className="contact-card-number">
                01
              </div>

              <div className="contact-card-content">

                <h3>
                  Start a Project
                </h3>

                <p>
                  Tell us about your idea, requirements and
                  goals. We'll figure out the right solution
                  together.
                </p>

                <a href="mailto:contact@codewith-mt.com">
                  Start a conversation
                  <span>↗</span>
                </a>

              </div>

            </div>
          </ScrollReveal>


          {/* COLLABORATE CARD */}

          <ScrollReveal direction="right" delay={0.25}>
            <div className="contact-card">

              <div className="contact-card-number">
                02
              </div>

              <div className="contact-card-content">

                <h3>
                  Let's Collaborate
                </h3>

                <p>
                  Have an interesting idea or want to work
                  together on something exciting?
                </p>

                <a href="mailto:contact@codewith-mt.com">
                  Let's connect
                  <span>↗</span>
                </a>

              </div>

            </div>
          </ScrollReveal>

        </div>


        {/* BOTTOM */}

        <ScrollReveal direction="up" delay={0.3}>
          <div className="contact-bottom">

            <div className="contact-status">
              <span></span>
              AVAILABLE FOR NEW PROJECTS
            </div>

            <div className="contact-brand">
              CodeWith<span>_MT</span>
            </div>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}