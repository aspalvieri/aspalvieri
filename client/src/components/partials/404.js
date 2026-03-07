import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-shell not-found-shell">
      <section className="not-found-card">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist or may have moved.</p>
        <Link to="/" className="btn-primary-solid">
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default PageNotFound;
