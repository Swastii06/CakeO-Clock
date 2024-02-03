import "./secimgstyles.css";
import React, { Component } from "react";

class Secimg extends Component {
  render() {
    return (
      <div className="sec-img"> 
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <p>{this.props.text1}</p>
        </div>
      </div>
    );
  }
}

export default Secimg;
