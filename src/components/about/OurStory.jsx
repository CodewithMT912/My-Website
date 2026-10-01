"use client";

import {
  FiFlag,
  FiEye,
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./ourstory.css";

export default function OurStory() {
  const story = [
    {
      number: "01",
      year: "THE BEGINNING",
      icon: <FiFlag />,
      title: "Where It All Started",
      description:
        "Codewith_MT started with a simple idea — use technology and creativity to turn ideas into digital experiences that people can actually use and remember.",
    },
    {
      number: "02",
      year: "THE VISION",
      icon: <FiEye />,
      title: "More Than Just Code",
      description:
        "We wanted to build more than websites. The vision was to combine modern design, powerful technology, and thoughtful experiences to help ideas become real digital products.",
    },
    {
      number: "03",
      year: "TODAY",
      icon: <FiActivity />,
      title: "Building The Future",
      description:
        "Today, Codewith_MT focuses on creating modern websites, web applications, e-commerce experiences, and custom digital solutions for ambitious ideas and businesses.",
    },
    {
      number: "04",
      year: "THE FUTURE",
      icon: <FiArrowUpRight />,
      title: "Where We're Going",
      description:
        "Our journey is just beginning. We are continuously learning, experimenting, and pushing forward to build better products and grow Codewith_MT into a technology brand built for the future.",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={0.1}>
      <section className="our-story" id="our-story">
      <div className="our-story-container">

        {/* SECTION LABEL */}
        <div className="our-story-label">
          <span></span>
          OUR STORY
        </div>

        {/* HEADER */}
        <div className="our-story-header">

          <div className="our-story-title">
            <h2>
              From
              <br />
              <span>Vision</span>
              <br />
              To Reality.
            </h2>
          </div>

          <div className="our-story-intro">
            <p>
              Every company has a beginning. Ours started with
              curiosity, creativity, and a desire to build something
              meaningful with technology.
            </p>

            <div className="story-mini-line">
              <span></span>
              THE JOURNEY CONTINUES
            </div>
          </div>

        </div>

        {/* TIMELINE */}
        <div className="story-timeline">

          <div className="story-center-line"></div>

          {story.map((item, index) => (
            <div
              className={`story-item ${
                index % 2 === 0
                  ? "story-item-left"
                  : "story-item-right"
              }`}
              key={item.number}
            >

              {/* TIMELINE POINT */}
              <div className="story-point">
                <span></span>
              </div>

              {/* CARD */}
              <div className="story-card">

                <div className="story-card-top">

                  <span className="story-number">
                    {item.number}
                  </span>

                  <span className="story-year">
                    {item.year}
                  </span>

                </div>

                <div className="story-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="story-card-line"></div>

              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="story-bottom">

          <div className="story-bottom-line"></div>

          <p>
            The story is still being written.
            <span> And we're just getting started.</span>
          </p>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}