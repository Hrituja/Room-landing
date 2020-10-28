import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import CTAction from "./CTAction";
import AboutImg from "./AboutImg";
import About from "./About";
import whiteImg from "./images/image-about-light.jpg";
import darkImg from "./images/image-about-dark.jpg";
import "./stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <CTAction />
        <AboutImg src={darkImg} />
        <About />
        <AboutImg src={whiteImg} />
      </div>
    );
  }
}

export default App;
