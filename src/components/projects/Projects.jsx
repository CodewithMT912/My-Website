import "./Projects.css";
import ScrollReveal from "../common/ScrollReveal";

const projects = [
  {
    number: "01",
    title: "Beyond The Beauty",
    category: "E-Commerce",
    description: "Premium skincare e-commerce website.",
    image: "/skin website.jpg",
    technologies: ["Next.js", "React"],
  },

  {
    number: "02",
    title: "Fitness Website",
    category: "Gym & Fitness",
    description: "Modern website for a fitness brand.",
    image: "/gym website.jpg",
    technologies: ["HTML", "CSS"],
  },

  {
    number: "03",
    title: "Food Delivery",
    category: "Food & Restaurant",
    description: "Responsive food delivery website.",
    image: "/food.jpg",
    technologies: ["React", "JavaScript"],
  },

  {
    number: "04",
    title: "Creative Portfolio",
    category: "Portfolio",
    description: "Professional personal portfolio website.",
    image: "/personal website.jpg",
    technologies: ["React", "UI/UX"],
  },

  {
    number: "05",
    title: "Business Website",
    category: "Business",
    description: "Modern digital presence for a business.",
    image: "/ecommerce website.jpg",
    technologies: ["Next.js", "Responsive"],
  },

  {
    number: "06",
    title: "Restaurant Website",
    category: "Restaurant",
    description: "Elegant restaurant website with modern UI.",
    image: "/resturant.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">

      {/* SECTION HEADER */}

      <ScrollReveal direction="up">
        <div className="projects-header">

          <div className="projects-label">
            <span></span>
            FEATURED PROJECTS
          </div>

          <div className="projects-heading-row">

            <div>
              <h2>
                Our Recent
                <br />
                <span>Work.</span>
              </h2>
            </div>

            <p>
              A selection of digital experiences we have designed and
              developed for businesses, brands and creative projects.
            </p>

          </div>

        </div>
      </ScrollReveal>


      {/* PROJECTS */}

      <div className="projects-grid">

        {projects.map((project, index) => (

          <ScrollReveal
            key={project.number}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.1}
          >

            <article
              className={`project-card project-${index + 1}`}
            >

              {/* IMAGE */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay"></div>

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-open">
                  ↗
                </span>

              </div>


              {/* CONTENT */}

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>


                <div className="project-tech">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>

          </ScrollReveal>

        ))}

      </div>


      {/* VIEW ALL */}

      <ScrollReveal direction="up" delay={0.2}>
        <div className="projects-footer">

          <a href="#contact">
            Have a project in mind?
            <span>Let's Talk ↗</span>
          </a>

        </div>
      </ScrollReveal>

    </section>
  );
}