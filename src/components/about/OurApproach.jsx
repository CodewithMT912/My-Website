"use client";

import {
  FiSearch,
  FiPenTool,
  FiCode,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./ourapproach.css";

export default function OurApproach() {
  const steps = [
    {
      number: "01",
      icon: <FiSearch />,
      title: "DISCOVER",
      description:
        "We start by understanding your idea, goals, audience, and the problem your digital product needs to solve.",
    },
    {
      number: "02",
      icon: <FiPenTool />,
      title: "DESIGN",
      description:
        "We transform ideas into thoughtful interfaces and experiences that are clear, engaging, and purposeful.",
    },
    {
      number: "03",
      icon: <FiCode />,
      title: "BUILD",
      description:
        "Our development process turns the approved concept into a fast, responsive, and scalable digital product.",
    },
    {
      number: "04",
      icon: <FiSend />,
      title: "LAUNCH",
      description:
        "After testing and refinement, we launch the product and make sure everything is ready for the real world.",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={0.1}>
      <section className="our-approach" id="our-approach">
      <div className="our-approach-container">

        {/* SECTION LABEL */}
        <div className="our-approach-label">
          <span></span>
          OUR APPROACH
        </div>

        {/* HEADER */}
        <div className="our-approach-header">

          <h2>
            From Idea
            <br />
            To <span>Impact.</span>
          </h2>

          <p>
            Great digital products are not created by accident.
            We follow a clear process that combines strategy,
            creativity, technology, and continuous improvement.
          </p>

        </div>

        {/* PROCESS */}
        <div className="approach-process">

          {steps.map((step, index) => (
            <div
              className="approach-step"
              key={step.number}
            >

              {/* CONNECTOR */}
              {index < steps.length - 1 && (
                <div className="approach-connector">
                  <FiArrowRight />
                </div>
              )}

              {/* NUMBER */}
              <div className="approach-number">
                {step.number}
              </div>

              {/* ICON */}
              <div className="approach-icon">
                {step.icon}
              </div>

              {/* CONTENT */}
              <div className="approach-content">

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="approach-bottom">

          <div className="approach-bottom-line"></div>

          <span>
            DISCOVER → DESIGN → BUILD → LAUNCH
          </span>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}