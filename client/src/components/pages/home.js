import React, { Component } from "react";
import { Link } from "react-router-dom";
//By using export default, i'm able to name the variable anything and it'll
//be equal to the default export, which in this case was the class "Slideshow"
import SlideshowModule from "../modules/slideshow";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textIntervalID: null,
			changingText: ["Dedication", "Passion", "Devotion", "Ambition"],
			textID: 0
		}
	}

	componentDidMount() {
		document.querySelector("#navbarSupportedContent").classList.remove("show");
		window.scrollTo(0, 0); //Push screen to top on new page
		new SlideshowModule("home");
		let highlight = document.querySelector(".highlight");
		let intervalID = setInterval(() => this.changeText(highlight), 5000);
		this.setState({ textIntervalID: intervalID });
	}

	componentWillUnmount() {
		clearInterval(this.state.textIntervalID);
	}
	
	changeText = (highlight) => {
		highlight.style.opacity = 0;
		setTimeout(() => {
			let id = this.state.textID;
			id = (id < this.state.changingText.length - 1 ? id + 1 : 0);
			this.setState({ textID: id });
			highlight.style.opacity = 1;
		}, 200);
	}
	
	render() {
		return(
			<div>
				<div className="home-img-1 text-center">
					<h2 className="centered">Programmer With <Link to="/projects" className="highlight">{this.state.changingText[this.state.textID]}</Link></h2>
				</div>
				<div className="container-fluid">
					<section className="row" style={{padding: "90px 0"}}>
						<div className="col-12 col-md-8 text-center mx-auto">
							<h2>About Me</h2>
							<p>
								My name is Alex Spalvieri and I've been programming for most of my life. 
								Starting with video game programming, I went from text adventures to 2D and 3D game development. 
								Later, I went onto front-end and back-end web development. My skills and passion are with software 
								and back-end programming.
							</p>
						</div>
					</section>
					<section className="row" style={{padding: "90px 0"}}>
						<div className="col-12 text-center mx-auto">
							<h2>Hobby Projects</h2>
							<p>
								Snippets from various games I've developed in my spare time.
							</p>
							<div className="slideshow" id="forgottenSpace">
								<div className="slide"><img src="" alt=""/></div>
								<div className="slide"><img src="" alt=""/></div>
								<div className="slide"><img src="" alt=""/></div>
							</div>
						</div>
					</section>
					<section className="row" style={{padding: "90px 0"}}>
						<div className="col-12 col-md-8 text-center mx-auto">
							<h2>Contact Me</h2>
							<p>
								My contact information is available at my LinkedIn:
								<br/>
								<a href="https://www.linkedin.com/in/alex-spalvieri/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alex-spalvieri/</a>
							</p>
						</div>
					</section>
					<div id="modal">
						<img src="" className="modal-content" alt="" />
						<span className="close">&times;</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
