import "./Industries.css";
import ScrollReveal from "../common/ScrollReveal";

const industries = [
  {
    number: "01",
    icon: "◈",
    title: "E-Commerce",
    description:
      "Modern online stores designed to convert visitors into customers.",
  },
  {
    number: "02",
    icon: "◉",
    title: "Restaurants",
    description:
      "Beautiful digital experiences for restaurants, cafes and food brands.",
  },
  {
    number: "03",
    icon: "△",
    title: "Fitness",
    description:
      "High-energy websites for gyms, trainers and fitness businesses.",
  },
  {
    number: "04",
    icon: "✦",
    title: "Beauty & Skincare",
    description:
      "Premium websites for beauty, cosmetics and skincare brands.",
  },
  {
    number: "05",
    icon: "🚀",
    title: "Startups",
    description:
      "Scalable digital products that help new businesses launch faster.",
  },
  {
    number: "06",
    icon: "◎",
    title: "Personal Brands",
    description:
      "Professional portfolios that turn your personal brand into an experience.",
  },
  {
    number: "07",
    icon: "⌂",
    title: "Local Businesses",
    description:
      "Websites that help local businesses build a stronger online presence.",
  },
  {
    number: "08",
    icon: "◇",
    title: "Agencies",
    description:
      "Modern digital solutions for creative and professional agencies.",
  },
];

export default function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">

        {/* HEADER */}

        <ScrollReveal direction="up">
          <div className="industries-header">

            <div className="industries-label">
              <span></span>
              INDUSTRIES WE SERVE
            </div>

            <h2>
              Digital Solutions
              <br />
              <span>For Every Vision.</span>
            </h2>

            <p>
              From ambitious startups to established brands, we create
              digital experiences tailored to different industries and goals.
            </p>

          </div>
        </ScrollReveal>

        {/* INDUSTRY GRID */}

        <div className="industries-grid">

          {industries.map((industry, index) => (
            <ScrollReveal
              key={industry.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.08}
            >
              <div className="industry-card">

                <div className="industry-top">

                  <span className="industry-number">
                    {industry.number}
                  </span>

                  <div className="industry-icon">
                    {industry.icon}
                  </div>

                </div>

                <div className="industry-content">

                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>

                </div>

                <div className="industry-arrow">
                  ↗
                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>

        {/* BOTTOM */}

        <ScrollReveal direction="up" delay={0.2}>
          <div className="industries-bottom">

            <span></span>

            <p>
              Don't see your industry? Let's talk about your idea.
            </p>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}