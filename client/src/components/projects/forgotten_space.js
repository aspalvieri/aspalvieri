import React, { Component } from "react";
import { Link } from "react-router-dom";

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
						<div className="col-12 col-md-8 mx-auto">
							WIP . . .
						</div>
            <div className="col-12 mx-auto text-center">
              <Link to="/projects" className="btn btn-outline-secondary">Back to Projects</Link>
            </div>
					</section>
				</div>
			</div>
		);
	}
}

export default ForgottenSpace;
