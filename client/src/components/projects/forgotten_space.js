import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../modules/slideshow";

class ForgottenSpace extends Component {
	componentDidMount() {
		document.querySelector("#navbarSupportedContent").classList.remove("show");
		window.scrollTo(0, 0); //Push screen to top on new page
	}

	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>Ruins of Forgotten Space</h1>
				</header>
				<div className="container-fluid">
					<section className="row">
						<div className="col-12 col-md-12 mx-auto py-5 text-center">
							<Slideshow values={{folder: "projects/forgotten_space", size: 4}} />
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

export default ForgottenSpace;
