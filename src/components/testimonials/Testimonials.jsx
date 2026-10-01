import "./Testimonials.css";
import ScrollReveal from "../common/ScrollReveal";

const testimonials = [
  {
    quote:
      "Codewith_MT understood the idea behind our project and turned it into a clean, professional digital experience.",
    name: "Project Client",
    role: "Business Owner",
  },
  {
    quote:
      "The attention to detail and focus on creating a modern experience made the entire project feel much more professional.",
    name: "Project Client",
    role: "Brand Owner",
  },
  {
    quote:
      "A great team for turning ideas into custom digital solutions. The communication and development process were smooth.",
    name: "Project Client",
    role: "Startup Founder",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}

        <ScrollReveal direction="up">
          <div className="testimonials-header">

            <div className="testimonials-label">
              <span></span>
              CLIENT EXPERIENCES
            </div>

            <h2>
              Built With
              <br />
              <span>People In Mind.</span>
            </h2>

            <p>
              Every project is a collaboration. We work closely with
              clients to understand their ideas, goals and expectations.
            </p>

          </div>
        </ScrollReveal>


        {/* TESTIMONIALS */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.15}
            >
              <article className="testimonial-card">

                <div className="testimonial-top">

                  <span className="testimonial-number">
                    0{index + 1}
                  </span>

                  <span className="testimonial-stars">
                    ★★★★★
                  </span>

                </div>


                <div className="testimonial-quote">
                  “
                </div>


                <p className="testimonial-text">
                  {testimonial.quote}
                </p>


                <div className="testimonial-author">

                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>

                </div>

              </article>
            </ScrollReveal>
          ))}

        </div>


        {/* BOTTOM */}

        <ScrollReveal direction="up" delay={0.2}>
          <div className="testimonials-bottom">

            <p>
              Your idea could be our next project.
            </p>

            <span>↗</span>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}