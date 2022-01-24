import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../modules/slideshow";

class EquationGame extends Component {
	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>Random Equation Game</h1>
				</header>
				<div className="container-fluid">
					<section className="row">
						<div className="col-12 col-md-8 mx-auto pb-5 pt-3 text-center">
							<p>
								Fun little JavaScript number game. Choose a number range from 1 - 999 and select which operations are allowed (addition,
								subtraction, multiplication, division). The game will randomize two numbers and an operation. You input the answer, and if
								it's correct, you'll gain 1 point. You lose 1 point if the answer was wrong. The game will record all equations, inputs,
								answers, and if the input was correct or not.
							</p>
							<p><small><code>JavaScript</code></small></p>
							<a target="_blank" className="btn btn-dark" rel="noopener noreferrer" href="https://github.com/aspalvieri/RandomEquationGame">
								<i className="fab fa-github"></i> View on GitHub
							</a>
						</div>
					</section>
					<section className="row">
						<div className="col-12 col-md-12 mx-auto py-5 text-center">
							<h2 className="pb-3">Screenshots</h2>
							<Slideshow values={{folder: "projects/equation_game", size: 3}} />
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

export default EquationGame;
