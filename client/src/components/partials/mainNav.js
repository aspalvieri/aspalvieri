import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link className="nav-link nav-logo" to="/">&nbsp;</Link>
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
                        <Link className="nav-link" to="/apilist">API List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MainNav;
