"use client";

import Link from "next/link";
import { FiArrowUpRight, FiCode, FiLayers, FiMonitor, FiTrendingUp } from "react-icons/fi";

import ScrollReveal from "../common/ScrollReveal";
import "./ProjectsLanding.css";

const categories = [
  {
    name: "Brand Websites",
    description: "Professional digital presence for businesses and service brands.",
    accent: "#4da3ff",
  },
  {
    name: "E-Commerce",
    description: "Conversion-ready online stores built around product experience and trust.",
    accent: "#27d3a3",
  },
  {
    name: "Web Apps",
    description: "Custom tools and platforms designed to improve operations and workflows.",
    accent: "#7c6cff",
  },
  {
    name: "Digital Growth",
    description: "Creative and strategic systems focused on visibility, engagement, and reach.",
    accent: "#ff9f43",
  },
];

const showcaseProjects = [
  {
    title: "Beyond The Beauty",
    category: "E-Commerce",
    description: "Premium skincare brand experience with conversion-focused storytelling and modern shopping UX.",
    results: ["+42% engagement", "Faster product discovery", "Cleaner storefront flow"],
    tech: ["Next.js", "Shopify", "UX Strategy"],
  },
  {
    title: "Fitness Website",
    category: "Wellness Brand",
    description: "A modern digital experience for a gym brand designed to attract leads and build authority.",
    results: ["Improved clarity", "Stronger lead funnel", "Mobile-first feel"],
    tech: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Food Delivery",
    category: "Business Platform",
    description: "A streamlined food ordering experience with strong usability and simple navigation.",
    results: ["Faster browsing", "Simplified ordering", "Improved user flow"],
    tech: ["React", "JavaScript", "UI System"],
  },
];

const techStack = [
  { name: "Next.js", icon: FiCode },
  { name: "React", icon: FiMonitor },
  { name: "UI/UX Design", icon: FiLayers },
  { name: "Performance Strategy", icon: FiTrendingUp },
];

const developmentApproach = [
  "Discovery and positioning review",
  "Wireframing and product flow planning",
  "High-fidelity design and interface system",
  "Development, testing, and launch optimization",
];

const stats = [
  { value: "6+", label: "Project styles delivered" },
  { value: "100%", label: "Responsive experiences" },
  { value: "24/7", label: "Digital availability" },
  { value: "Fast", label: "Performance-first builds" },
];

export default function ProjectsLanding() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-container">
          <ScrollReveal direction="left">
            <div className="projects-hero-copy">
              <div className="projects-label">
                <span></span>
                PROJECTS HERO
              </div>

              <h1>
                Great Ideas,
                <br />
                <span>Built Into Results.</span>
              </h1>

              <p>
                We design and build digital experiences that turn business goals into clear,
                modern, and conversion-focused solutions.
              </p>

              <div className="projects-hero-actions">
                <Link href="/contact" className="projects-primary-btn">
                  Start a Project
                  <FiArrowUpRight />
                </Link>

                <Link href="/#contact" className="projects-secondary-btn">
                  Let’s Talk
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="projects-hero-visual">
              <div className="project-visual-ring ring-one"></div>
              <div className="project-visual-ring ring-two"></div>
              <div className="project-visual-ring ring-three"></div>

              <div className="project-visual-core">
                <FiCode />
              </div>

              <div className="project-visual-badge badge-one">UX</div>
              <div className="project-visual-badge badge-two">Build</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="featured-projects">
        <div className="featured-projects-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="projects-label">
                <span></span>
                FEATURED PROJECTS
              </div>

              <h2>
                Work that blends
                <br />
                <span>strategy and design.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="featured-grid">
            {showcaseProjects.map((project, index) => (
              <ScrollReveal key={project.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.12}>
                <article className="showcase-card">
                  <div className="showcase-top">
                    <span>{project.category}</span>
                    <strong>0{index + 1}</strong>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul>
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>

                  <div className="showcase-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="project-categories">
        <div className="project-categories-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="projects-label">
                <span></span>
                PROJECT CATEGORIES
              </div>

              <h2>
                Scalable digital solutions
                <br />
                <span>for different business goals.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="category-grid">
            {categories.map((category, index) => (
              <ScrollReveal key={category.name} direction={index % 2 === 0 ? "up" : "down"} delay={index * 0.08}>
                <article className="category-card" style={{ "--category-accent": category.accent }}>
                  <span className="category-index">0{index + 1}</span>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="project-showcase">
        <div className="project-showcase-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="projects-label">
                <span></span>
                PROJECT SHOWCASE / CASE STUDIES
              </div>

              <h2>
                Selected wins,
                <br />
                <span>built to perform.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="case-study-grid">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="case-card case-main">
                <div className="case-image"></div>
                <div className="case-copy">
                  <span className="case-tag">Featured Case</span>
                  <h3>Brand Experience Upgrade</h3>
                  <p>
                    Designed to improve trust, create a stronger online identity, and improve customer engagement through cleaner messaging and better conversion flow.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="case-stack">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="mini-case">
                  <span>Conversion</span>
                  <h3>Higher clarity</h3>
                  <p>Modern structure that improves user confidence and makes value easier to understand.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="mini-case">
                  <span>Design</span>
                  <h3>Better engagement</h3>
                  <p>Clean layouts and focused messaging keep the experience memorable and professional.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="project-tech-stack">
        <div className="project-tech-stack-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="projects-label">
                <span></span>
                TECHNOLOGY BEHIND OUR PROJECTS
              </div>

              <h2>
                Built with tools that support
                <br />
                <span>modern growth.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="tech-grid">
            {techStack.map(({ name, icon: Icon }, index) => (
              <ScrollReveal key={name} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.08}>
                <div className="tech-card">
                  <div className="tech-icon">
                    <Icon />
                  </div>
                  <h3>{name}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="project-approach">
        <div className="project-approach-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="projects-label">
                <span></span>
                PROJECT DEVELOPMENT APPROACH
              </div>

              <h2>
                A process designed to
                <br />
                <span>ship with confidence.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="approach-list">
            {developmentApproach.map((step, index) => (
              <ScrollReveal key={step} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.08}>
                <div className="approach-step">
                  <span>{`0${index + 1}`}</span>
                  <p>{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="project-stats">
        <div className="project-stats-container">
          <ScrollReveal direction="up">
            <div className="section-heading">
              <div className="projects-label">
                <span></span>
                PROJECT STATISTICS
              </div>

              <h2>
                Measurable digital outcomes,
                <br />
                <span>built around progress.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} direction={index % 2 === 0 ? "up" : "down"} delay={index * 0.08}>
                <div className="stats-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-final-cta">
        <div className="projects-final-cta-container">
          <ScrollReveal direction="up">
            <div className="final-cta-box">
              <div className="projects-label">
                <span></span>
                FINAL CTA
              </div>

              <h2>
                Need a project that
                <br />
                <span>stands out online?</span>
              </h2>

              <p>
                Let’s build something that looks strong, feels memorable, and performs for your business.
              </p>

              <Link href="/contact" className="projects-primary-btn">
                Let’s Build Together
                <FiArrowUpRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
