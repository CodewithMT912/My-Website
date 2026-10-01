import "./Services.css";
import ScrollReveal from "../common/ScrollReveal";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "Modern, fast and responsive websites built to give your business a strong digital presence.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    icon: "⚛",
    title: "React & Next.js",
    description:
      "High-performance web applications with modern React and Next.js technologies.",
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    number: "03",
    icon: "🛒",
    title: "Shopify Websites",
    description:
      "Professional Shopify stores designed to showcase products and turn visitors into customers.",
    tags: ["Shopify", "E-Commerce", "UI"],
  },
  {
    number: "04",
    icon: "W",
    title: "WordPress Websites",
    description:
      "Professional WordPress websites for businesses, portfolios, blogs and online brands.",
    tags: ["WordPress", "Business", "CMS"],
  },
  {
    number: "05",
    icon: "↗",
    title: "Meta Ads",
    description:
      "Creative and strategic Meta advertising solutions designed to help businesses reach more people.",
    tags: ["Facebook", "Instagram", "Ads"],
  },
  {
    number: "06",
    icon: "▶",
    title: "Video Editing",
    description:
      "Engaging video content for social media, brands, advertisements and digital campaigns.",
    tags: ["Reels", "Ads", "Social"],
  },
  {
    number: "07",
    icon: "✦",
    title: "UI / UX Design",
    description:
      "Clean and modern interfaces designed around usability, branding and great user experiences.",
    tags: ["Figma", "UI", "UX"],
  },
  {
    number: "08",
    icon: "▣",
    title: "Responsive Design",
    description:
      "Web experiences that look and work beautifully across phones, tablets and desktops.",
    tags: ["Mobile", "Tablet", "Desktop"],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">

      {/* SECTION HEADER */}

      <ScrollReveal direction="up">
        <div className="services-header">

          <div className="services-label">
            <span></span>
            WHAT WE BUILD
          </div>

          <h2>
            Digital Solutions
            <br />
            <span>Built For Growth.</span>
          </h2>

          <p>
            From websites and web applications to e-commerce, advertising
            and creative services, we build digital solutions that help
            businesses grow in the digital world.
          </p>

        </div>
      </ScrollReveal>


      {/* SERVICES GRID */}

      <div className="services-grid">

        {services.map((service, index) => (
          <ScrollReveal
            key={service.number}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.08}
          >
            <div className="service-card">

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>

              </div>


              <h3>{service.title}</h3>

              <p>{service.description}</p>


              <div className="service-tags">

                {service.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>


              <div className="service-arrow">
                ↗
              </div>

            </div>
          </ScrollReveal>
        ))}

      </div>


      {/* BOTTOM CTA */}

      <ScrollReveal direction="up" delay={0.2}>
        <div className="services-bottom">

          <p>
            Have a project in mind?
          </p>

          <a href="#contact">
            Let's Build Something Great
            <span>↗</span>
          </a>

        </div>
      </ScrollReveal>

    </section>
  );
}