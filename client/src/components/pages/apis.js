import React, { Component } from "react";
import Axios from "axios";
import { config } from "../../utils/config";

class APIs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: []
		}
	}

	componentDidMount() {
		document.querySelector("#navbarSupportedContent").classList.remove("show");
		window.scrollTo(0, 0); //Push screen to top on new page
	}

	fetchRandomArray() {
		Axios.get(`${config.SERVER_URI}/api/test/random_array`)
			.then(res => this.setState({ array: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return(
			<div className="APIs">
				<header>
					<h1 style={{textAlign: "center"}}>List of APIs</h1>
				</header>
				<section>
					<p style={{textAlign: "left"}}>
						<a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL+"/api/test/random_array"}>Random Array API</a><br/>
						Returns a randomly sized array, filled with random integers.<br/>
						Parameters:<br/>
						min_arr = Minimum size of the array. Default: 5<br/>
						max_arr = Maximum size of the array. Default: 10<br/>
						min_val = Minimum random integer. Default: 1<br/>
						max_val = Maximum random integer. Default: 100<br/>
						<button className="btn btn-outline-primary" style={{ margin: "5px 0" }} onClick={() => this.fetchRandomArray()}>Fetch</button> <br/>
					</p>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Array (size of {this.state.array.length})</th>
							</tr>
						</thead>
						<tbody>
							{this.state.array.map((arr, i) => (
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
}

export default APIs;
