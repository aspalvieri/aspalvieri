import React, { useEffect } from "react";

function APIList() {
    
    useEffect(() => {
        //Messy way to hide hamburger menu after navigation
        document.querySelector("#navbarSupportedContent").classList.remove("show");
    }, []);

    return(
        <div className="container">
            <header>
                <h1 style={{textAlign: "center"}}>List of APIs</h1>
            </header>
            <p>
                <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL+"/api/test/random_array"}>Random Array API</a>
            </p>
            
        </div>
    );
}

export default APIList;
