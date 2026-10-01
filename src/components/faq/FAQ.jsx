"use client";

import { useState } from "react";
import "./FAQ.css";
import ScrollReveal from "../common/ScrollReveal";

const faqs = [
  {
    question: "What kind of projects can Codewith_MT build?",
    answer:
      "We work on custom digital projects including websites, web applications, e-commerce platforms, software solutions, UI/UX experiences and other technology projects based on your requirements.",
  },
  {
    question: "Can you build a completely custom website?",
    answer:
      "Yes. We can create a website from scratch around your brand, goals, content and functionality instead of relying on a fixed template.",
  },
  {
    question: "Do you work with businesses and startups?",
    answer:
      "Yes. We can work with businesses, startups, personal brands and organizations that need a professional digital presence or a custom technology solution.",
  },
  {
    question: "Can you handle a project that needs multiple technologies?",
    answer:
      "Yes. Depending on the project, different members of our team can contribute across development, design, applications, e-commerce, automation and other technical areas.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "We start by understanding your idea, goals, requirements and expected outcome. From there, we determine the right approach, technologies and development process.",
  },
  {
    question: "Can you work on an existing website or application?",
    answer:
      "Yes. We can work with existing projects for improvements, redesigns, new features, performance improvements, maintenance or further development.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section" id="faq">

      <div className="faq-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <ScrollReveal direction="up">
          <div className="faq-header">

            <div className="faq-label">
              <span></span>
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2>
              Got Questions?
              <br />
              <span>We Have Answers.</span>
            </h2>

            <p>
              Here are some common questions about our company,
              capabilities and the way we approach digital projects.
            </p>

          </div>
        </ScrollReveal>


        {/* =========================================
            FAQ LIST
        ========================================= */}

        <div className="faq-list">

          {faqs.map((faq, index) => {

            const isOpen = activeIndex === index;

            return (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
              >
                <div
                  className={`faq-item ${isOpen ? "active" : ""}`}
                >

                  {/* QUESTION */}

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >

                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-title">
                      {faq.question}
                    </span>

                    {/* Desktop only */}

                    <span className="faq-icon">
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>


                  {/* DESKTOP ANSWER */}

                  {isOpen && (
                    <div className="faq-answer faq-answer-desktop">
                      <p>{faq.answer}</p>
                    </div>
                  )}


                  {/* MOBILE ANSWER */}

                  <div className="faq-answer faq-answer-mobile">
                    <p>{faq.answer}</p>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}

        </div>


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <ScrollReveal direction="up" delay={0.2}>
          <div className="faq-bottom">

            <div>

              <span>STILL HAVE A QUESTION?</span>

              <h3>
                Let's talk about{" "}
                <strong>your idea.</strong>
              </h3>

            </div>

            <a href="#contact">
              Contact Us
              <span>↗</span>
            </a>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}