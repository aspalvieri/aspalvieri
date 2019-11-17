import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import * as SlideshowModule from "../assets/home/slideshow";

function Home() {
    //Passing empty array as 2nd argument causes this to run only once on page load
    useEffect(() => {
        //Messy way to hide hamburger menu after navigation
        document.querySelector("#navbarSupportedContent").classList.remove("show");
        //Creates the slideshows displayed under ...Hobby Projects...
        new SlideshowModule.Slideshow();
    }, []);

    //<h2>Programmer With <Link to="/" className="highlight">Passion</Link></h2>
    return(
        <div className="container">
            <header>
                <h1>Alex Spalvieri</h1>
            </header>
            <hr/>
            <section className="home-img-1">
                <h2 className="centered">Programmer With <HashLink to="/#passion" className="highlight">Passion</HashLink></h2>
            </section>
            <hr/>
            <section>
                <h2>...About Me...</h2>
                <p>
                    Hello, my name is Alex Spalvieri and I've been programming since before I started highschool. 
                    Starting with video game programming, I went from text adventures to 2D and 3D game development. 
                    Later, I went onto front-end and back-end web development. My skills and passion are with software 
                    and back-end programming.
                </p>
            </section>
            <hr/>
            {/* id purely for linking from 'Passion' text... */}
            <section>
                <h2 id="passion">...Hobby Projects...</h2>
                <p>
                    Snippets from various games I've worked on for fun.
                </p>
                {/* Slideshow styles stored under ../assets/home/styles.scss */}
                <div className="slideshow" id="forgottenSpace">
                    <div className="slide"><img src="" alt=""/></div>
                    <div className="slide"><img src="" alt=""/></div>
                    <div className="slide"><img src="" alt=""/></div>
                </div>
            </section>
            <div id="modal">
                <span className="close">&times;</span>
                <img src="" className="modal-content" alt="" />
            </div>
        </div>
    );
}

export default Home;
