"use client";

import ScrollReveal from "../common/ScrollReveal";
import "./whatweare.css";
import {
  FiGlobe,
  FiMonitor,
  FiShoppingBag,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";

import "./whatweare.css";

export default function WhatWeDo() {
  const services = [
    {
      number: "01",
      icon: <FiGlobe />,
      title: "WEB DEVELOPMENT",
      description:
        "Modern, responsive websites designed to give businesses a strong and professional digital presence.",
    },
    {
      number: "02",
      icon: <FiMonitor />,
      title: "WEB APPLICATIONS",
      description:
        "Powerful and scalable web applications built to solve real problems and create better digital experiences.",
    },
    {
      number: "03",
      icon: <FiShoppingBag />,
      title: "E-COMMERCE",
      description:
        "Modern online stores focused on smooth user experiences, product discovery, and business growth.",
    },
    {
      number: "04",
      icon: <FiCode />,
      title: "CUSTOM SOLUTIONS",
      description:
        "Tailored digital solutions built around your unique requirements, goals, and ideas.",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={0.1}>
      <section className="what-we-do" id="what-we-do">
      <div className="what-we-do-container">

        {/* HEADER */}
        <div className="what-we-do-header">

          <div className="what-we-do-label">
            <span></span>
            WHAT WE DO
          </div>

          <div className="what-we-do-heading">
            <h2>
              Turning Ideas
              <br />
              Into <span>Reality.</span>
            </h2>

            <p>
              We combine creativity, technology, and thoughtful development
              to build digital products that are designed to make an impact.
            </p>
          </div>

        </div>

        {/* SERVICES */}
        <div className="what-we-do-services">

          {services.map((service) => (
            <div className="what-we-do-card" key={service.number}>

              <div className="what-we-do-card-top">
                <span className="what-we-do-number">
                  {service.number}
                </span>

                <div className="what-we-do-icon">
                  {service.icon}
                </div>
              </div>

              <div className="what-we-do-card-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>

              <div className="what-we-do-card-bottom">

                <span>EXPLORE SERVICE</span>

                <FiArrowUpRight />

              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="what-we-do-bottom">

          <span className="what-we-do-bottom-line"></span>

          <p>
            From the first idea to the final product,
            we build with purpose.
          </p>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}