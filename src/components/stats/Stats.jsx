import "./Stats.css";
import ScrollReveal from "../common/ScrollReveal";

const stats = [
  {
    number: "10+",
    title: "Projects",
    description: "Digital projects built across different industries.",
  },
  {
    number: "12+",
    title: "Websites",
    description: "Modern websites and digital experiences created.",
  },
  {
    number: "8+",
    title: "Services",
    description: "Different digital capabilities available through our team.",
  },
  {
    number: "100%",
    title: "Dedication",
    description: "Focused on quality, creativity and continuous improvement.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom websites, web applications, business platforms and powerful digital experiences.",
    tags: ["Frontend", "Full-Stack", "Web Apps"],
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Modern application solutions designed around your users and business requirements.",
    tags: ["Mobile Apps", "Applications", "Custom"],
  },
  {
    number: "03",
    title: "UI/UX & Product Design",
    description:
      "Clean and thoughtful interfaces combining visual design, usability and strong branding.",
    tags: ["UI Design", "UX Design", "Figma"],
  },
  {
    number: "04",
    title: "E-Commerce Solutions",
    description:
      "Professional online stores and custom shopping experiences for growing businesses.",
    tags: ["Online Stores", "Products", "Payments"],
  },
  {
    number: "05",
    title: "AI & Automation",
    description:
      "Smart solutions using AI and automation to improve workflows and digital experiences.",
    tags: ["AI", "Automation", "Smart Solutions"],
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Tailored software and business systems created around specific requirements.",
    tags: ["Custom Systems", "Business Tools", "Platforms"],
  },
  {
    number: "07",
    title: "Digital Marketing",
    description:
      "Digital growth solutions that help businesses strengthen their online presence.",
    tags: ["SEO", "Social Media", "Marketing"],
  },
  {
    number: "08",
    title: "Cloud & Deployment",
    description:
      "Deployment and infrastructure solutions that help digital products go live reliably.",
    tags: ["Deployment", "Hosting", "Cloud"],
  },
];

export default function Stats() {
  return (
    <section className="stats-section" id="capabilities">

      <div className="stats-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <ScrollReveal direction="up">
          <div className="stats-header">

            <div className="stats-label">
              <span></span>
              OUR IMPACT
            </div>

            <h2>
              The Numbers Behind
              <br />
              <span>Codewith_MT.</span>
            </h2>

            <p>
              We combine technology, creativity and a growing team of
              specialists to turn ambitious ideas into digital solutions.
            </p>

          </div>
        </ScrollReveal>


        {/* =====================================
            STATISTICS
        ===================================== */}

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.title}
              direction="up"
              delay={index * 0.1}
            >
              <div className="stat-item">

                <strong>
                  {stat.number}
                </strong>

                <h3>
                  {stat.title}
                </h3>

                <p>
                  {stat.description}
                </p>

              </div>
            </ScrollReveal>
          ))}

        </div>


        {/* =====================================
            CAPABILITIES HEADER
        ===================================== */}

        <ScrollReveal direction="up" delay={0.1}>
          <div className="capabilities-heading">

            <div>

              <span>
                WHAT WE CAN BUILD
              </span>

              <h3>
                More Than
                <br />
                <strong>Just Websites.</strong>
              </h3>

            </div>

            <p>
              Codewith_MT is built to handle custom digital projects.
              Our team can bring together different technologies and
              areas of expertise depending on what your project needs.
            </p>

          </div>
        </ScrollReveal>


        {/* =====================================
            CAPABILITIES GRID
        ===================================== */}

        <div className="capabilities-grid">

          {capabilities.map((capability, index) => (
            <ScrollReveal
              key={capability.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.08}
            >
              <article className="capability-card">

                <div className="capability-card-top">

                  <span className="capability-number">
                    {capability.number}
                  </span>

                  <span className="capability-arrow">
                    ↗
                  </span>

                </div>


                <div className="capability-icon">
                  <span></span>
                </div>


                <div className="capability-content">

                  <h3>
                    {capability.title}
                  </h3>

                  <p>
                    {capability.description}
                  </p>

                </div>


                <div className="capability-tags">

                  {capability.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </article>
            </ScrollReveal>
          ))}

        </div>


        {/* =====================================
            CUSTOM PROJECT CTA
        ===================================== */}

        <ScrollReveal direction="up" delay={0.15}>
          <div className="capabilities-cta">

            <div className="capabilities-cta-text">

              <span>
                HAVE A UNIQUE IDEA?
              </span>

              <h3>
                Tell us what you
                <br />
                want to <strong>build.</strong>
              </h3>

            </div>


            <div className="capabilities-cta-description">

              <p>
                Every project is different. Whether you need a website,
                application, e-commerce platform, custom software or
                another digital solution, our team can work with you
                to find the right approach.
              </p>

            </div>

          </div>
        </ScrollReveal>


        {/* =====================================
            BOTTOM STATUS
        ===================================== */}

        <ScrollReveal direction="up" delay={0.2}>
          <div className="stats-bottom">

            <span></span>

            <p>
              Custom solutions. One team. Endless possibilities.
            </p>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}