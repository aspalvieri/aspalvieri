import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { projectCategories, projects } from "../../data/projects";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Project Portfolio</p>
        <h1>Projects</h1>
        <p className="subtitle">
          End-to-end work across web applications and game development, with an emphasis on clear
          architecture, maintainable code, and reliable execution.
        </p>
      </section>

      <section className="projects-filter-bar" aria-label="Project category filters">
        {projectCategories.map((category) => (
          <button
            type="button"
            key={category}
            className={`pill-filter${selectedCategory === category ? " is-active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="projects-grid" aria-label="Project cards">
        {filteredProjects.map((project) => (
          <article key={project.slug} className="project-card">
            <img src={project.image} alt={`Screenshot from ${project.title}`} />
            <div className="project-card-body">
              <p className="project-category">{project.category}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul className="tag-list">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-card-actions">
                <Link to={`/projects/${project.slug}`} className="btn-primary-solid">
                  View Project
                </Link>
                <a
                  target="_blank"
                  className="btn-secondary-outline"
                  rel="noopener noreferrer"
                  href={project.githubUrl}
                >
                  <i className="fab fa-github" aria-hidden="true"></i> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="more-projects-block">
        <h2>More Projects</h2>
        <p>Explore additional repositories, prototypes, and experiments on my GitHub profile.</p>
        <a
          target="_blank"
          className="btn-primary-solid"
          rel="noopener noreferrer"
          href="https://github.com/aspalvieri"
        >
          <i className="fab fa-github" aria-hidden="true"></i> Visit GitHub
        </a>
      </section>
    </div>
  );
}

export default Projects;
