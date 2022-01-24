import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../modules/slideshow";

class CityDefense extends Component {
	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>City Defense</h1>
				</header>
				<div className="container-fluid">
					<section className="row">
						<div className="col-12 col-md-8 mx-auto pb-5 pt-3 text-center">
							<p>
								City management simulator mixed with a tower defense. Start off with only a handful of resources and a randomly
								generated map. Build farms and generators to slowly get the city flowing. After some time, the locals of the planet
								will try to remove the city you've built up. Make towers and walls to defend your city, while researching
								new technologies to assist with the defense and growth of your city.
							</p>
							<p><small><code>C++&nbsp;&nbsp;SDL2</code></small></p>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/CityDefense">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
					</section>
					<section className="row">
						<div className="col-12 col-md-12 mx-auto py-5 text-center">
							<h2 className="pb-3">Screenshots</h2>
							<Slideshow values={{folder: "projects/city_defense", size: 3}} />
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

export default CityDefense;
