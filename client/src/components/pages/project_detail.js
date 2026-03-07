import { Link, useParams } from "react-router-dom";
import Slideshow from "../modules/slideshow";
import PageNotFound from "../partials/404";
import { projectBySlug } from "../../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectBySlug.get(slug || "");

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <div className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Project Case Study</p>
        <h1>{project.title}</h1>
        <p className="subtitle">{project.headline}</p>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-card">
          <p>{project.summary}</p>
          <ul className="tag-list" aria-label={`${project.title} technology stack`}>
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="project-detail-actions">
            <a
              target="_blank"
              className="btn-primary-solid"
              rel="noopener noreferrer"
              href={project.githubUrl}
            >
              <i className="fab fa-github" aria-hidden="true"></i> View on GitHub
            </a>
            <Link to="/projects" className="btn-secondary-outline">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="project-detail-section">
        <h2>Screenshots</h2>
        <Slideshow values={{ folder: project.slideFolder, size: project.slideCount }} />
      </section>
    </div>
  );
}

export default ProjectDetail;
