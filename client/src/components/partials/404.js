import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <header className="mx-auto text-center">
          <h2 className="mb-4"><b>404:</b> Page Not Found</h2>
          <Link to="/" className="btn btn-outline-secondary">
            Back to home
          </Link>
        </header>
      </div>
    );
  }
}

export default PageNotFound;
