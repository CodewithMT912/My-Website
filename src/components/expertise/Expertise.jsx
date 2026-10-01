import "./Expertise.css";

const expertise = [
  {
    category: "FRONTEND",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "DESIGN",
    technologies: [
      "Figma",
      "UI Design",
      "UX Design",
      "Responsive Design",
    ],
  },
  {
    category: "E-COMMERCE",
    technologies: [
      "Shopify",
      "WordPress",
      "E-Commerce",
      "Online Stores",
    ],
  },
  {
    category: "CREATIVE & MARKETING",
    technologies: [
      "Meta Ads",
      "Video Editing",
      "Social Media",
      "Digital Marketing",
    ],
  },
];

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise">

      <div className="expertise-container">

        {/* HEADER */}

        <div className="expertise-header">

          <div className="expertise-label">
            <span></span>
            OUR EXPERTISE
          </div>

          <h2>
            Tools That Turn
            <br />
            <span>Ideas Into Reality.</span>
          </h2>

          <p>
            We use modern technologies, creative tools and proven
            platforms to build digital experiences for businesses,
            brands and individuals.
          </p>

        </div>


        {/* CENTER TECH AREA */}

        <div className="expertise-core">

          <div className="expertise-glow"></div>

          <div className="expertise-ring expertise-ring-one"></div>
          <div className="expertise-ring expertise-ring-two"></div>

          <div className="expertise-core-content">

            <span>CODEWITH_MT</span>

            <strong>
              TECH
              <br />
              STACK
            </strong>

            <small>
              BUILD • DESIGN • GROW
            </small>

          </div>

        </div>


        {/* TECHNOLOGY GROUPS */}

        <div className="expertise-groups">

          {expertise.map((group) => (

            <div
              className="expertise-group"
              key={group.category}
            >

              <h3>
                {group.category}
              </h3>

              <div className="expertise-items">

                {group.technologies.map((technology) => (

                  <div
                    className="expertise-item"
                    key={technology}
                  >
                    {technology}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM */}

        <div className="expertise-bottom">

          <span className="expertise-status"></span>

          <p>
            Always learning. Always building. Always improving.
          </p>

        </div>

      </div>

    </section>
  );
}