import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
    return (
        <>
        <div className="navbar fixed-top navbar-expand-lg navbar-bg-fix"></div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link className="nav-link nav-logo" to="/"></Link>
            <Link className="navbar-brand" to="/">Alex Spalvieri</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/apis">APIs</Link>
                    </li>
                    <li className="nav-item mobile-icons">
                        <a target="_blank" href="https://www.linkedin.com/in/alex-spalvieri/" className="fa fa-linkedin" rel="noopener noreferrer"> </a>
                        <a target="_blank" href="https://github.com/aspalvieri" className="fa fa-github" rel="noopener noreferrer"> </a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default MainNav;
