import React, { useEffect } from "react";

function Projects() {
    useEffect(() => {
        document.querySelector("#navbarSupportedContent").classList.remove("show");
        window.scrollTo(0, 0); //Ugly fix to push screen to top on new page
    }, []);

    return(
        <div id="Projects">
            <header>
                <h1 style={{textAlign: "center"}}>Projects</h1>
            </header>
            <section>
                <p style={{textAlign: "left"}}>
                    WIP . . .
                </p>
            </section>
        </div>
    );
}

export default Projects;
