"use client";

import {
  FiZap,
  FiTarget,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./whatdrivesus.css";

export default function WhatDrivesUs() {
  const principles = [
    {
      number: "01",
      icon: <FiZap />,
      title: "INNOVATION",
      description:
        "We constantly explore new technologies, ideas, and better ways to create meaningful digital experiences.",
    },
    {
      number: "02",
      icon: <FiTarget />,
      title: "PURPOSE",
      description:
        "Every project starts with a purpose. We focus on understanding the real goal behind every idea we build.",
    },
    {
      number: "03",
      icon: <FiAward />,
      title: "QUALITY",
      description:
        "We believe great work is in the details. Clean code, thoughtful design, performance, and reliability matter.",
    },
    {
      number: "04",
      icon: <FiTrendingUp />,
      title: "GROWTH",
      description:
        "We build with the future in mind, creating digital solutions that can evolve as businesses and ideas grow.",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={0.1}>
      <section className="what-drives-us" id="what-drives-us">
      <div className="what-drives-us-container">

        {/* LABEL */}
        <div className="what-drives-us-label">
          <span></span>
          WHAT DRIVES US
        </div>

        {/* HEADER */}
        <div className="what-drives-us-header">

          <div className="what-drives-us-title">
            <h2>
              Built On
              <br />
              <span>Belief.</span>
            </h2>
          </div>

          <div className="what-drives-us-intro">
            <p>
              Technology is only part of what we do. Our mindset,
              principles, and commitment to doing meaningful work
              shape every digital experience we create.
            </p>
          </div>

        </div>

        {/* PRINCIPLES */}
        <div className="drives-grid">

          {principles.map((item) => (
            <article
              className="drive-card"
              key={item.number}
            >

              {/* CARD TOP */}
              <div className="drive-card-top">

                <span className="drive-number">
                  {item.number}
                </span>

                <div className="drive-icon">
                  {item.icon}
                </div>

              </div>

              {/* CARD CONTENT */}
              <div className="drive-card-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              {/* CARD LINE */}
              <div className="drive-card-line"></div>

            </article>
          ))}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="drives-bottom">

          <div className="drives-bottom-line"></div>

          <p>
            We don't just build digital products.
            <span> We build with intention.</span>
          </p>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}