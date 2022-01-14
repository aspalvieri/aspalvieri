import React, { Component } from "react";

class Projects extends Component {
	componentDidMount() {
		document.querySelector("#navbarSupportedContent").classList.remove("show");
		window.scrollTo(0, 0); //Push screen to top on new page
	}

	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>Projects</h1>
				</header>
				<section>
					<div><div></div></div>
					<div></div>
					<p style={{textAlign: "left"}}>
						WIP . . .
					</p>
				</section>
			</div>
		);
	}
}

export default Projects;
