import React, { Component } from "react";
import classnames from "classnames";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.values,
      modalDisplay: "none",
      modalImage: "",
      current: 1
    }
  }

  buildSlideshow = () => {
    let rows = [], key = 0;
    //Add each slide to the slideshow
    for (let i = 0; i < this.state.size; i++) {
      rows.push(
        <div key={key++} className="slide" style={{display: ((i+1) === this.state.current ? "inline-block" : "none")}}>
          <img onClick={this.openModal} src={require(`../../assets/${this.state.folder}/${i+1}.webp`)} alt=""/>
        </div>
      );
    }
    //Add navigation buttons
    rows.push(<br key={key++}/>);
    rows.push(
      <button key={key++} onClick={this.prevSlide} className="slidebutton slidebutton-nav">
        <i className="fas fa-arrow-left"></i>
      </button>
    );
    for (let i = 0; i < this.state.size; i++) {
      rows.push(
        <button key={key++} onClick={this.setSlide} className={classnames("slidebutton", { "button-active": (i+1) === this.state.current })} 
        data-index={(i+1)}>
          &nbsp;
        </button>
      );
    }
    rows.push(
      <button key={key++} onClick={this.nextSlide} className="slidebutton slidebutton-nav">
        <i className="fas fa-arrow-right"></i>
      </button>
    );
    return rows;
  }

  setSlide = (e) => {
    this.setState({ current: parseInt(e.target.dataset.index) });
  }

  nextSlide = (e) => {
    let current = this.state.current;
    current = (current + 1 > this.state.size ? 1 : current + 1);
    this.setState({ current });
  }

  nextSlideModal = (e) => {
    let current = this.state.current;
    current = (current + 1 > this.state.size ? 1 : current + 1);
    this.setState({ current, modalImage: require(`../../assets/${this.state.folder}/${current}.webp`) });
  }

  prevSlide = (e) => {
    let current = this.state.current;
    current = (current - 1 <= 0 ? this.state.size : current - 1);
    this.setState({ current });
  }

  prevSlideModal = (e) => {
    let current = this.state.current;
    current = (current - 1 <= 0 ? this.state.size : current - 1);
    this.setState({ current, modalImage: require(`../../assets/${this.state.folder}/${current}.webp`) });
  }

  openModal = (e) => {
    this.setState({
      modalDisplay: "block",
      modalImage: e.target.src
    });
  }

  closeModal = (e) => {
    this.setState({ modalDisplay: "none" });
  }

  render() {
    return (
      <div>
        <div className="slideshow">
          {this.buildSlideshow()}
        </div>
        <div className="sh-modal" style={{display: this.state.modalDisplay}}>
          <img onClick={this.closeModal} className="sh-modal-content" src={this.state.modalImage} alt="" />
          <span onClick={this.closeModal} className="close">&times;</span>
          <div>
            <button onClick={this.prevSlideModal} className="slidebutton slidebutton-nav"><i style={{fontSize: "24px"}} className="fas fa-arrow-left"></i></button>
            <button onClick={this.nextSlideModal} className="slidebutton slidebutton-nav"><i style={{fontSize: "24px"}} className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
