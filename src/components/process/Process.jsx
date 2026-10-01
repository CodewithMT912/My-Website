import "./Process.css";
import ScrollReveal from "../common/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience and what you want to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a clear strategy, structure and roadmap for your digital project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We turn the idea into a modern, intuitive and visually engaging experience.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the project using modern technologies and responsive development.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test everything, make final improvements and get your project ready to go live.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">

        {/* HEADER */}

        <ScrollReveal direction="up">
          <div className="process-header">
            <div className="process-label">
              <span></span>
              HOW WE WORK
            </div>

            <h2>
              From Idea
              <br />
              <span>To Reality.</span>
            </h2>

            <p>
              A simple and transparent process designed to turn your idea
              into a powerful digital experience.
            </p>
          </div>
        </ScrollReveal>

        {/* TIMELINE */}

        <div className="process-timeline">

          <div className="process-line"></div>

          {steps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.12}
            >
              <div className="process-step">

                <div className="process-number">
                  {step.number}
                </div>

                <div className="process-dot"></div>

                <div className="process-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>

        {/* BOTTOM */}

        <ScrollReveal direction="up" delay={0.2}>
          <div className="process-bottom">
            <span></span>
            <p>Simple process. Serious results.</p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}