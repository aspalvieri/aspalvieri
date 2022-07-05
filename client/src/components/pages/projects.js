import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>Projects</h1>
				</header>
				<div className="container-fluid">
					<section className="row py-5">
						<div className="col-12 col-sm-6 col-md-5 order-2 order-sm-1 ms-auto">
							<h2>Property Manager</h2>
							<p className="mb-1">
								Property managing application for property managers and landlords. The manager can create, update, view, and delete
								properties. Within each property, the manager is able to create, update, view, and delete units. This tool is useful
								for keeping trach of which units belong to which properties.
							</p>
							<p><small><code style={{wordWrap: "normal"}}>Node&nbsp;&nbsp;Express&nbsp;&nbsp;MongoDB&nbsp;&nbsp;React&nbsp;&nbsp;Redux</code></small></p>
							<Link to="projects/property_manager" className="btn btn-primary btn-lg me-4">View Project</Link>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/PropertyManager">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
						<div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-3 order-1 order-sm-2 mb-4 mb-sm-0 mx-auto mx-sm-0 me-sm-auto">
							<img className="img-thumbnail shadow" src={require("../../assets/projects/property_manager/2.png")} alt="Example of Property Manager" />
						</div>
					</section>
					<section className="row py-5">
						<div className="col-12 col-sm-6 col-md-5 order-2 order-sm-1 ms-auto">
							<h2>Ruins of Forgotten Space</h2>
							<p className="mb-1">
								Top-down dungeon crawler set in the future. Travel to different planets and explore the randomly generated
								maps. Gather resources to upgrade your armor and weapons. Defeat enemies to level-up your character, and
								gain increasingly stronger spells to help you venture into more dangerous planets. Unlock more of your spaceship
								as you progress through the game.
							</p>
							<p><small><code style={{wordWrap: "normal"}}>C++&nbsp;&nbsp;SDL2</code></small></p>
							<Link to="projects/forgotten_space" className="btn btn-primary btn-lg me-4">View Project</Link>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/ForgottenSpace">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
						<div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-3 order-1 order-sm-2 mb-4 mb-sm-0 mx-auto mx-sm-0 me-sm-auto">
							<img className="img-thumbnail shadow" src={require("../../assets/projects/forgotten_space/2.png")} alt="Example of Ruins of Forgotten Space" />
						</div>
					</section>
					<section className="row py-5">
						<div className="col-12 col-sm-6 col-md-5 order-2 order-sm-1 ms-auto">
							<h2>Random Equation Game</h2>
							<p className="mb-1">
								Fun little JavaScript number game. Choose a number range from 1 - 999 and select which operations are allowed (addition,
								subtraction, multiplication, division). The game will randomize two numbers and an operation. You input the answer, and if
								it's correct, you'll gain 1 point. You lose 1 point if the answer was wrong. The game will record all equations, inputs,
								answers, and if the input was correct or not.
							</p>
							<p><small><code style={{wordWrap: "normal"}}>JavaScript</code></small></p>
							<Link to="projects/equation_game" className="btn btn-primary btn-lg me-4">View Project</Link>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/RandomEquationGame">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
						<div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-3 order-1 order-sm-2 mb-4 mb-sm-0 mx-auto mx-sm-0 me-sm-auto">
							<img className="img-thumbnail shadow" src={require("../../assets/projects/equation_game/1.png")} alt="Example of Random Equation Game" />
						</div>
					</section>
					<section className="row py-5">
						<div className="col-12 col-sm-6 col-md-5 order-2 order-sm-1 ms-auto">
							<h2>City Defense</h2>
							<p className="mb-1">
								City management simulator mixed with a tower defense. Start off with only a handful of resources and a randomly
								generated map. Build farms and generators to slowly get the city flowing. After some time, the locals of the planet
								will try to remove the city you've built up. Make towers and walls to defend your city, while researching
								new technologies to assist with the defense and growth of your city.
							</p>
							<p><small><code style={{wordWrap: "normal"}}>C++&nbsp;&nbsp;SDL2</code></small></p>
							<Link to="projects/city_defense" className="btn btn-primary btn-lg me-4">View Project</Link>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/CityDefense">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
						<div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-3 order-1 order-sm-2 mb-4 mb-sm-0 mx-auto mx-sm-0 me-sm-auto">
							<img className="img-thumbnail shadow" src={require("../../assets/projects/city_defense/1.png")} alt="Example of City Defense" />
						</div>
					</section>
					<section className="row py-5">
						<div className="col-12 text-center">
							<h2>More Projects</h2>
							<p>
								To see all of my projects, please visit my
								<a target="_blank" className="btn btn-sm btn-dark" style={{marginLeft: "10px"}} rel="noopener noreferrer" href="https://github.com/aspalvieri">
									<i className="fab fa-github"></i> GitHub
								</a>
							</p>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Projects;
