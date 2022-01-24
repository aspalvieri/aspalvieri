import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../modules/slideshow";

class ForgottenSpace extends Component {
	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>Ruins of Forgotten Space</h1>
				</header>
				<div className="container-fluid">
					<section className="row">
						<div className="col-12 col-md-8 mx-auto pb-5 pt-3 text-center">
							<p>
								Top-down dungeon crawler set in the future. Travel to different planets and explore the randomly generated
								maps. Gather resources to upgrade your armor and weapons. Defeat enemies to level-up your character, and
								gain increasingly stronger spells to help you venture into more dangerous planets. Unlock more of your spaceship
								as you progress through the game.
							</p>
							<p><small><code>C++&nbsp;&nbsp;SDL2</code></small></p>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/ForgottenSpace">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
					</section>
					<section className="row">
						<div className="col-12 col-md-12 mx-auto py-5 text-center">
							<h2 className="pb-3">Screenshots</h2>
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
