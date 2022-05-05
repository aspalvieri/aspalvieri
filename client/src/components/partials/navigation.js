import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navigation extends Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
				<Link className="nav-link nav-logo" to="/"></Link>
				<Link className="navbar-brand" to="/">Alex Spalvieri</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/" exact activeClassName="nav-link-active">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/projects" activeClassName="nav-link-active">Projects</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/apis" activeClassName="nav-link-active">APIs</NavLink>
						</li>
						<li className="nav-item">
							<a className="nav-link" target="_blank" rel="noreferrer" href="https://game.aspalvieri.com/">Web Game</a>
						</li>
						<li className="nav-item mobile-icons">
							<a target="_blank" href="https://www.linkedin.com/in/alex-spalvieri/" className="fab fa-linkedin" rel="noopener noreferrer"> </a>
							<a target="_blank" href="https://github.com/aspalvieri" className="fab fa-github" rel="noopener noreferrer"> </a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navigation;
