import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import * as SlideshowModule from "../assets/home/slideshow";

function Home() {
    const [changingText, setChangingText] = useState({text: ["Dedication","Passion","Devotion","Ambition"], index: 0});

    //There has to be a better way to make this, but I simply cannot find it.
    function changeText(highlight) {
        highlight.style.opacity = 0;
        setTimeout(() => {
            setChangingText(prevState => {
                let newState = {...prevState};
                newState.index = (newState.index + 1 < newState.text.length) ? newState.index + 1 : 0;
                return newState;
            });
            highlight.style.opacity = 1;
        }, 300);
    }
    
    //Passing empty array as 2nd argument causes this to run only once on page load
    useEffect(() => {
        document.querySelector("#navbarSupportedContent").classList.remove("show");
        window.scrollTo(0, 0);
        new SlideshowModule.Slideshow();
        let highlight = document.querySelector(".highlight");
        let intervalID = setInterval(() => changeText(highlight), 5000);
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    //<h2>Programmer With <Link to="/" className="highlight">Passion</Link></h2>
    return(
        <>
            <section className="home-img-1">
                <h2 className="centered">Programmer With <HashLink to="/#aboutme" className="highlight">{changingText.text[changingText.index]}</HashLink></h2>
            </section>
            <section id="aboutme">
                <h2>About Me</h2>
                <p>
                    My name is Alex Spalvieri and I've been programming for most of my life. 
                    Starting with video game programming, I went from text adventures to 2D and 3D game development. 
                    Later, I went onto front-end and back-end web development. My skills and passion are with software 
                    and back-end programming.
                </p>
            </section>
            <section>
                <h2>Hobby Projects</h2>
                <p>
                    Snippets from various games I've developed in my spare time.
                </p>
                {/* Slideshow styles stored under home_styles.scss */}
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
        </>
    );
}

export default Home;
