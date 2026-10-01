import "./WhyUs.css";
import ScrollReveal from "../common/ScrollReveal";

const reasons = [
  {
    number: "01",
    title: "Modern Design",
    description:
      "We create clean, modern and professional digital experiences that make your brand stand out.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Fast Performance",
    description:
      "Our websites are built with performance in mind, giving users a smooth and fast experience.",
    icon: "⚡",
  },
  {
    number: "03",
    title: "Fully Responsive",
    description:
      "Your website will look great and work smoothly on desktops, tablets and mobile devices.",
    icon: "◫",
  },
  {
    number: "04",
    title: "Client Focused",
    description:
      "We understand your goals first and then build a solution around your business and audience.",
    icon: "◎",
  },
];

export default function WhyUs() {
  return (
    <section className="why-section" id="why-us">

      <div className="why-container">

        {/* HEADER */}

        <ScrollReveal direction="up">
          <div className="why-header">

            <div className="why-label">
              <span></span>
              WHY CHOOSE US
            </div>

            <h2>
              Built Different.
              <br />
              <span>Built For You.</span>
            </h2>

            <p>
              We combine creativity, technology and strategy to build
              digital experiences that help businesses make a stronger
              impact online.
            </p>

          </div>
        </ScrollReveal>


        {/* CARDS */}

        <div className="why-grid">

          {reasons.map((reason, index) => (
            <ScrollReveal
              key={reason.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.12}
            >
              <div className="why-card">

                <div className="why-card-top">

                  <span className="why-number">
                    {reason.number}
                  </span>

                  <div className="why-icon">
                    {reason.icon}
                  </div>

                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

                <div className="why-line"></div>

              </div>
            </ScrollReveal>
          ))}

        </div>


        {/* BOTTOM MESSAGE */}

        <ScrollReveal direction="up" delay={0.2}>
          <div className="why-bottom">

            <span className="why-bottom-dot"></span>

            <p>
              Your vision. Our creativity. One digital experience.
            </p>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}