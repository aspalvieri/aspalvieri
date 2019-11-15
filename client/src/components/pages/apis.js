import React, { useEffect } from "react";

function APIs() {
    
    useEffect(() => {
        //Messy way to hide hamburger menu after navigation
        document.querySelector("#navbarSupportedContent").classList.remove("show");
    }, []);

    return(
        <div className="container">
            <header>
                <h1 style={{textAlign: "center"}}>List of APIs</h1>
            </header>
            <section>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL+"/api/test/random_array"}>Random Array API</a><br/>
                    Returns a randomly sized array, filled with random integers.<br/>
                    Parameters:<br/>
                    min_arr = Minimum size of the array. Default: 5<br/>
                    max_arr = Maximum size of the array. Default: 10<br/>
                    min_val = Minimum random integer. Default: 1<br/>
                    max_val = Maximum random integer. Default: 100<br/>
                </p>
            </section>
        </div>
    );
}

export default APIs;
