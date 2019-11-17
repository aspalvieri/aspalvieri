import React, { useState, useEffect } from "react";
import Axios from "axios";

function APIs() {
    const [array, setArray] = useState([]);

    function fetchRandomArray() {
        Axios.get("/api/test/random_array")
            .then(res => setArray(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        //Messy way to hide hamburger menu after navigation
        document.querySelector("#navbarSupportedContent").classList.remove("show");
    }, []);

    return(
        <div className="container">
            <header>
                <h1 style={{textAlign: "center"}}>List of APIs</h1>
            </header>
            <hr/>
            <section>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL+"/api/test/random_array"}>Random Array API</a><br/>
                    Returns a randomly sized array, filled with random integers.<br/>
                    Parameters:<br/>
                    min_arr = Minimum size of the array. Default: 5<br/>
                    max_arr = Maximum size of the array. Default: 10<br/>
                    min_val = Minimum random integer. Default: 1<br/>
                    max_val = Maximum random integer. Default: 100<br/>
                    <button onClick={() => fetchRandomArray()}>Fetch</button> <br/>
                </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Array (size of {array.length})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((arr, i) => (
                            <tr key={i}>
                                <td><span style={{color: "rgb(175,175,175)"}}>{i+1}:</span> {arr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default APIs;
