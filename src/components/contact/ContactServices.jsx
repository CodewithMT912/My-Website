import "./ContactServices.css";
import ScrollReveal from "../common/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern and responsive websites built around your business, brand and goals.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Powerful web applications designed to solve real business problems.",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Professional online stores designed to showcase products and grow your business.",
  },
  {
    number: "04",
    title: "UI / UX Design",
    description:
      "Clean and intuitive interfaces focused on usability and great user experiences.",
  },
  {
    number: "05",
    title: "WordPress",
    description:
      "Professional WordPress websites for businesses, portfolios and online brands.",
  },
  {
    number: "06",
    title: "Custom Solutions",
    description:
      "Unique digital solutions built specifically around your requirements.",
  },
];

export default function ContactServices() {
  return (
    <section className="contact-services-section">

      <div className="contact-services-container">

        {/* HEADER */}

        <ScrollReveal direction="up">
          <div className="contact-services-header">

            <div className="contact-services-label">
              <span></span>
              WHAT CAN WE HELP WITH?
            </div>

            <h2>
              Your Idea.
              <br />
              <span>Our Expertise.</span>
            </h2>

            <p>
              Whatever you are planning to build, we can help turn
              your idea into a professional digital experience.
            </p>

          </div>
        </ScrollReveal>


        {/* SERVICES */}

        <div className="contact-services-grid">

          {services.map((service, index) => (

            <ScrollReveal
              key={service.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.08}
            >

              <article className="contact-service-card">

                <div className="contact-service-top">

                  <span>
                    {service.number}
                  </span>

                  <strong>
                    ↗
                  </strong>

                </div>

                <div className="contact-service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>

              </article>

            </ScrollReveal>

          ))}

        </div>


        {/* BOTTOM */}

        <ScrollReveal direction="up" delay={0.2}>
          <div className="contact-services-bottom">

            <span></span>

            <p>
              Don't see what you need? Tell us about your idea.
            </p>

          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}