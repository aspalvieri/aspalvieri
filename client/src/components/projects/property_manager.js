import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../modules/slideshow";

class PropertyManager extends Component {
	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>Property Manager</h1>
				</header>
				<div className="container-fluid">
					<section className="row">
						<div className="col-12 col-md-8 mx-auto pb-5 pt-3 text-center">
							<p>
								Property managing application for property managers and landlords. The manager can create, update, view, and delete
								properties. Within each property, the manager is able to create, update, view, and delete units. This tool is useful
								for keeping trach of which units belong to which properties.
							</p>
							<p><small><code>Node&nbsp;&nbsp;Express&nbsp;&nbsp;MongoDB&nbsp;&nbsp;React&nbsp;&nbsp;Redux</code></small></p>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/PropertyManager">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
					</section>
					<section className="row">
						<div className="col-12 col-md-12 mx-auto py-5 text-center">
							<h2 className="pb-3">Screenshots</h2>
							<Slideshow values={{folder: "projects/property_manager", size: 3}} />
						</div>
					</section>
					<section className="row">
						<div className="col-12 col-md-8 mx-auto py-5 text-center">
              <Link to="/projects" className="btn btn-outline-secondary">Back to Projects</Link>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default PropertyManager;
