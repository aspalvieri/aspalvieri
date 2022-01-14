import React, { Component } from "react";

class Projects extends Component {
	componentDidMount() {
		document.querySelector("#navbarSupportedContent").classList.remove("show");
		window.scrollTo(0, 0); //Push screen to top on new page
	}

	render() {
		return(
			<div className="Projects">
					<header>
							<h1 style={{textAlign: "center"}}>Projects</h1>
					</header>
					<section>
							<p style={{textAlign: "left"}}>
									WIP . . .
							</p>
					</section>
			</div>
		);
	}
}

export default Projects;
