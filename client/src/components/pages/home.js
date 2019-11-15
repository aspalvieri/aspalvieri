import React, { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
    const [array, setArray] = useState([]);

    function fetchRandomArray() {
        Axios.get("/api/test/random_array")
            .then(res => setArray(res.data))
            .catch(err => console.log(err));
    }

    //Passing empty array as 2nd argument causes this to run only once on page load
    useEffect(() => {
        fetchRandomArray();
        //Messy way to hide hamburger menu after navigation
        document.querySelector("#navbarSupportedContent").classList.remove("show");
    }, []);

    return(
        <div className="container">
            <header>
                <h1 style={{textAlign: "center"}}>Home Page</h1>
            </header>
            <section>
                <p>
                    <button onClick={() => fetchRandomArray()}>Fetch</button> <br/>
                    Random Array:
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
                                <td><span className="gray">{i+1}:</span> {arr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Home;
