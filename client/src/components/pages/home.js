import React, { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        Axios.get("/api/test/random_array")
            .then(res => setArray(res.data))
            .catch(err => console.log(err));
    }, []);

    return(
        <div className="container">
            <header>
                <h1 style={{textAlign: "center"}}>Home Page</h1>
            </header>
            <p>
                Random Array:
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Array (size of {array.length})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map(arr => (
                            <tr>
                                <td>{arr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </p>
        </div>
    );
}

export default Home;
