import React, { Component } from "react";
import Axios from "axios";
import { config } from "../../utils/config";

class APIs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			array_vars: {
				min_arr: 5,
				max_arr: 10,
				min_val: 1,
				max_val: 100
			}
		}
	}

	fetchRandomArray = () => {
		let { min_arr, max_arr, min_val, max_val } = this.state.array_vars;
		Axios.get(`${config.SERVER_URI}/api/test/random_array?min_arr=${min_arr}&max_arr=${max_arr}&min_val=${min_val}&max_val=${max_val}`)
			.then(res => this.setState({ array: res.data }))
			.catch(err => console.log(err));
	}

	onChange = e => {
    this.setState(state => ({
			array_vars: {
				...state.array_vars,
				[e.target.id]: e.target.value 
			}
		}));
  };

	render() {
		return(
			<div>
				<header>
					<h1 style={{textAlign: "center"}}>List of APIs</h1>
				</header>
				<div className="container-fluid">
					<section className="row">
						<div className="col-12 col-md-8 mx-auto">
							<p style={{textAlign: "left"}} className="mb-3">
								<a target="_blank" rel="noopener noreferrer" href={`${config.SERVER_URI}/api/test/random_array`}>Random Array API</a><br/>
								Returns a randomly sized array, filled with random integers.<br/>
								<button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#paramModal">
									<i className="fas fa-info-circle"></i> View Details</button>
							</p>
							<div>
								<div className="modal fade" id="paramModal" tabIndex="-1" aria-labelledby="paramModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="paramModalLabel"><b>GET:</b> /api/test/random_array</h5>
												<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<small><b>Parameters:</b></small><br/>
												<code>min_arr</code> <b>:</b> Minimum size of the array, default: 5<br/>
												<code>max_arr</code> <b>:</b> Maximum size of the array, default: 10<br/>
												<code>min_val</code> <b>:</b> Minimum random integer, default: 1<br/>
												<code>max_val</code> <b>:</b> Maximum random integer, default: 100<br/>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<small><b>Parameters:</b></small><br/>
								<div className="input-group mb-1">
									<span className="input-group-text" id="basic-addon1">Minimum array length</span>
									<input type="number" className="form-control" id="min_arr" onChange={this.onChange} value={this.state.array_vars.min_arr} />
								</div>
								<div className="input-group mb-1">
									<span className="input-group-text" id="basic-addon1">Maximum array length</span>
									<input type="number" className="form-control" id="max_arr" onChange={this.onChange} value={this.state.array_vars.max_arr} />
								</div>
								<div className="input-group mb-1">
									<span className="input-group-text" id="basic-addon1">Minimum value</span>
									<input type="number" className="form-control" id="min_val" onChange={this.onChange} value={this.state.array_vars.min_val} />
								</div>
								<div className="input-group mb-1">
									<span className="input-group-text" id="basic-addon1">Maximum value</span>
									<input type="number" className="form-control" id="max_val" onChange={this.onChange} value={this.state.array_vars.max_val} />
								</div>
								<button className="btn btn-primary" style={{ margin: "5px 0" }} onClick={this.fetchRandomArray}>
									<i className="fas fa-paper-plane"></i> Fetch Array</button> 
								<br/>
								<table className="table table-sm table-striped">
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
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default APIs;
