import React, { Component } from "react";
import { Link } from "react-router-dom";
import self_portrait from "../../assets/home/me.png";

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
		let highlight = document.querySelector(".highlight");
		let intervalID = setInterval(() => this.changeText(highlight), 3500);
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
						<div className="col-12 col-md-8 mx-auto">
						<h2 className="col-12 text-center mb-3">About Me</h2>
							<div className="row">
								<div className="col-6 col-sm-5 col-lg-4 col-xl-3 col-xxl-2 mx-auto mb-3 mb-md-0">
									<img className="img-fluid img-thumbnail shadow" src={self_portrait} alt="Alex Spalvieri" />
								</div>
								<div className="col-12 col-md-7 col-lg-8 col-xl-9 col-xxl-10">
									<p>
										My name is Alex Spalvieri and I've been programming for most of my life. 
										Starting with video game programming, I went from text adventures to 2D and 3D game development. 
										Later, I went onto front-end and back-end web development. I attended Georgian College, and majored
										in Interactive Media Design, where I learned to use old and new technologies for creating websites.
										The program started with HTML, CSS, PHP, and MySQL. Later, it switched to Node.js, Express, React,
										and MongoDB. I enjoy back-end development, as well as working on fun and interactive projects.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="row" style={{padding: "90px 0"}}>
						<div className="col-12 text-center mx-auto">
							<h2>Projects</h2>
							<p>
								Some of my projects can be viewed on the <Link to="/projects">projects</Link> page.<br/>
								All of my projects can be viewed on my <a target="_blank" rel="noopener noreferrer" href="https://github.com/aspalvieri">github</a> profile.
							</p>
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
				</div>
			</div>
		);
	}
}

export default Home;
