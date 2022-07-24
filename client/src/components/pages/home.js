import React, { Component } from "react";
import { Link } from "react-router-dom";
import self_portrait from "../../assets/home/me.png";
import classNames from "classnames";
import axios from "axios";
import { config } from "../../utils/config";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textIntervalID: null,
			SITE_KEY: "6Lf9RxkhAAAAAPfXzj9kXiea2s6Qe4JnNyQ10eZE",
			changingText: ["Dedication", "Passion", "Devotion", "Ambition"],
			textID: 0,
			contact: {
				sending: false,
				sentForm: false,
				name: "",
				nameValid: true,
				email: "",
				emailValid: true,
				message: "",
				messageValid: true
			}
		}
	}

	componentDidMount() {
		let highlight = document.querySelector(".highlight");
		let intervalID = setInterval(() => this.changeText(highlight), 3500);
		this.setState({ textIntervalID: intervalID });
		const loadScriptByURL = (id, url, callback) => {
			const isScriptExist = document.getElementById(id);
	 
			if (!isScriptExist) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.src = url;
				script.id = id;
				script.onload = function () {
					if (callback) callback();
				};
				document.body.appendChild(script);
			}
	 
			if (isScriptExist && callback) callback();
		}
	 
		// load the script by passing the URL
		loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${this.state.SITE_KEY}`, function () {
			console.log("Script loaded!");
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.textIntervalID);
	}
	
	changeText = (highlight) => {
		highlight.style.opacity = 0;
		setTimeout(() => {
			let id = this.state.textID;
			id = (id < this.state.changingText.length - 1 ? id + 1 : 0);
			this.setState({ textID: id });
			highlight.style.opacity = 1;
		}, 200);
	}

	onChange = e => {
    this.setState(state => ({
			contact: {
				...state.contact,
				[e.target.id]: e.target.value 
			}
		}));
		this.updateValid(e.target.id, true);
  };

	updateValid = (name, value) => {
		this.setState(state => ({
			contact: {
				...state.contact,
				[`${name}Valid`]: value
			}
		}));
	}

	disableButton = (value) => {
		this.setState(state => ({
			contact: {
				...state.contact,
				sending: value
			}
		}));
	}

	handleSubmit = e => {
		e.preventDefault();
		let debounce = false;
		this.disableButton(true);
		const {name, email, message} = this.state.contact;
		if (name === "" || name.length > 32) {
			this.updateValid("name", false);
			this.disableButton(false);
			debounce = true;
		}
		if (email === "" || email.length > 128 || !email.includes("@") || !email.includes(".")) {
			this.updateValid("email", false);
			this.disableButton(false);
			debounce = true;
		}
		if (message === "" || message.length > 1000) {
			this.updateValid("message", false);
			this.disableButton(false);
			debounce = true;
		}
		if (!debounce) {
			window.grecaptcha.ready(() => {
				window.grecaptcha.execute(this.state.SITE_KEY, { action: 'submit' }).then(token => {
					axios.post(`${config.SERVER_URI}/api/mail/send`, {token, name, email, message}).then(res => {
						if (res.status === 200) {
							this.setState(state => ({
								contact: {
									...state.contact,
									sentForm: true
								}
							}));
						}
					}).catch(err => {
						this.disableButton(false);
					});
				});
			});
		}
	};
	
	render() {
		return(
			<div>
				<div className="home-img-1 text-center">
					<h2 className="centered">Programmer With <Link to="/projects" className="highlight">{this.state.changingText[this.state.textID]}</Link></h2>
				</div>
				<div className="container-fluid">
					<section className="row" style={{padding: "90px 0"}}>
						<div className="col-12 col-md-8 mx-auto">
						<h2 className="col-12 text-center mb-3">About Me</h2>
							<div className="row">
								<div className="col-6 col-sm-5 col-lg-4 col-xl-3 col-xxl-2 mx-auto mb-3 mb-md-0">
									<img className="img-fluid img-thumbnail shadow" src={self_portrait} alt="Alex Spalvieri" />
								</div>
								<div className="col-12 col-md-7 col-lg-8 col-xl-9 col-xxl-10">
									<p>
										My name is Alex Spalvieri and I've been programming for most of my life. 
										Starting with video game programming, I went from text adventures to 2D and 3D game development. 
										Later, I went onto front-end and back-end web development. I attended Georgian College, and majored
										in Interactive Media Design, where I learned to use old and new technologies for creating websites.
										The program started with HTML, CSS, PHP, and MySQL. Later, it switched to Node.js, Express, React,
										and MongoDB. I enjoy back-end development, as well as working on fun and interactive projects.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="row" style={{padding: "90px 0"}}>
						<div className="col-12 text-center mx-auto">
							<h2>Projects</h2>
							<p>
								Some of my projects can be viewed on the <Link to="/projects">projects</Link> page.<br/>
								All of my projects can be viewed on my <a target="_blank" rel="noopener noreferrer" href="https://github.com/aspalvieri">github</a> profile.
							</p>
						</div>
					</section>
					<section className="row" style={{padding: "90px 0"}}>
						<div className="col-12 col-md-8 text-center mx-auto">
							<h2 className="mb-4">Contact Me</h2>
							{!this.state.contact.sentForm ?
							<form noValidate onSubmit={this.handleSubmit}>
								<div className="mb-3 col-5 col-xxl-3 px-3 d-inline-block">
									<label htmlFor="name" className="form-label">Name</label>
									<input type="text" maxLength={32} className={classNames("form-control", {"is-invalid": !this.state.contact.nameValid})} id="name" onChange={this.onChange} value={this.state.contact.name} />
								</div>
								<div className="mb-3 col-5 col-xxl-3 px-3 d-inline-block">
									<label htmlFor="email" className="form-label">Email</label>
									<input type="email" maxLength={128} className={classNames("form-control", {"is-invalid": !this.state.contact.emailValid})} id="email" onChange={this.onChange} value={this.state.contact.email} />
								</div>
								<div className="mb-1 col-10 col-xxl-6 px-3 d-block mx-auto">
									<label htmlFor="message" className="form-label">Message</label>
									<textarea maxLength={1000} className={classNames("form-control", {"is-invalid": !this.state.contact.messageValid})} id="message" rows={3} onChange={this.onChange} value={this.state.contact.message} />
								</div>
								<div className="small fw-light text-muted mb-2">
									This site is protected by reCAPTCHA and the Google&nbsp;
									<a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;
									<a href="https://policies.google.com/terms">Terms of Service</a> apply.
								</div>
								<button type="submit" className={classNames("mt-3 btn btn-primary col-3", {"disabled": this.state.contact.sending})}>Submit form</button>
							</form>
							: <p>
								Your message has successfully been sent!
							</p>}
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Home;
