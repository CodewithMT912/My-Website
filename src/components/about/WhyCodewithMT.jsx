"use client";

import {
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiCode,
  FiUsers,
} from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./whycodewithmt.css";

export default function WhyCodewithMT() {
  const reasons = [
    {
      number: "01",
      icon: <FiLayers />,
      title: "CUSTOM SOLUTIONS",
      description:
        "We don't believe in one-size-fits-all websites. Every project is shaped around the unique goals, audience, and needs of the business.",
    },
    {
      number: "02",
      icon: <FiMonitor />,
      title: "MODERN DESIGN",
      description:
        "We create clean, modern interfaces designed to make your brand look professional and give visitors a memorable experience.",
    },
    {
      number: "03",
      icon: <FiSmartphone />,
      title: "RESPONSIVE BY DEFAULT",
      description:
        "Your digital experience should work beautifully everywhere — desktop, tablet, and mobile.",
    },
    {
      number: "04",
      icon: <FiCode />,
      title: "MODERN TECHNOLOGY",
      description:
        "We use modern development technologies and best practices to create fast, maintainable, and reliable digital products.",
    },
    {
      number: "05",
      icon: <FiTrendingUp />,
      title: "BUILT TO GROW",
      description:
        "We think beyond launch. Our solutions are structured with scalability in mind so your digital presence can grow with your business.",
    },
    {
      number: "06",
      icon: <FiUsers />,
      title: "CLIENT FOCUSED",
      description:
        "Communication matters. We work closely with our clients to understand their vision and turn it into something real.",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={0.1}>
      <section className="why-codewithmt" id="why-codewithmt">
      <div className="why-codewithmt-container">

        {/* LABEL */}
        <div className="why-codewithmt-label">
          <span></span>
          WHY CODEWITH_MT
        </div>

        {/* HEADER */}
        <div className="why-codewithmt-header">

          <div className="why-codewithmt-title">
            <h2>
              Built
              <br />
              <span>Different.</span>
            </h2>
          </div>

          <div className="why-codewithmt-intro">
            <p>
              Choosing a technology partner is about more than
              technical skills. It's about finding a team that
              understands your vision and cares about the result.
            </p>
          </div>

        </div>

        {/* REASONS */}
        <div className="why-codewithmt-grid">

          {reasons.map((reason) => (
            <article
              className="why-codewithmt-card"
              key={reason.number}
            >

              {/* TOP */}
              <div className="why-card-top">

                <span className="why-card-number">
                  {reason.number}
                </span>

                <div className="why-card-icon">
                  {reason.icon}
                </div>

              </div>

              {/* CONTENT */}
              <div className="why-card-content">

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

              </div>

              {/* BOTTOM LINE */}
              <div className="why-card-line"></div>

            </article>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="why-codewithmt-bottom">

          <div className="why-bottom-line"></div>

          <p>
            Technology with purpose.
            <span> Experiences with impact.</span>
          </p>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}