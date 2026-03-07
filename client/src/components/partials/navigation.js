import { Link, NavLink } from "react-router-dom";

function Navigation() {
  const getNavClass = ({ isActive }) => `site-nav-link${isActive ? " is-active" : ""}`;

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg site-navbar" aria-label="Primary">
        <div className="container-fluid site-navbar-inner">
          <Link className="brand-lockup" to="/">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="brand-name">Alex Spalvieri</span>
          </Link>

          <button
            className="navbar-toggler site-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="site-nav-list">
              <li>
                <NavLink className={getNavClass} to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={getNavClass} to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className={getNavClass} to="/apis">
                  APIs
                </NavLink>
              </li>
            </ul>

            <div className="site-social-links" aria-label="Social links">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alex-spalvieri/"
                className="fab fa-linkedin"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              ></a>
              <a
                target="_blank"
                href="https://github.com/aspalvieri"
                className="fab fa-github"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              ></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
