import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../css/carousel.css";

class ControlledCarousel extends React.Component {
  render() {
    return (
      <Carousel
        interval={3500}
        className="carousel-intro"
      >
        <Carousel.Item className="carousel-item">
          <img className="asd" style={{minHeight: "100%"}} src={require("../images/violin-bckg.jpg")} />
          <Carousel.Caption className="centered-carousel-text">
            <h1 className="main-title-text">Gosyen & Sonus Perfectus</h1>             
            <p><h3 className="sub-title-text">Distributor Musik & Sports Terpercaya se-Indonesia</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img id="size-lg" style={{minHeight: "100%"}} src={require("../images/drumm.jpg")} />
          <img id="size-md" style={{minHeight: "100%"}} src={require("../images/drum-md.jpg")} />
          <img id="size-xs" style={{minHeight: "100%"}} src={require("../images/drum-xs.jpg")} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img id="size-lg" style={{minHeight: "100%"}} src={require("../images/drum-lg.jpg")} />
          <img id="size-md" style={{minHeight: "100%"}} src={require("../images/drum-md.jpg")} />
          <img id="size-xs" style={{minHeight: "100%"}} src={require("../images/drum-xs.jpg")} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;