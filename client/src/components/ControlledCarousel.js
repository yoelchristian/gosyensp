import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import "../css/carousel.css";

class ControlledCarousel extends React.Component {
  render() {
    return (
      <Carousel
        interval={null}
        className="carousel-intro"
        pauseOnHover={false}
      >
        <Carousel.Item className="carousel-item">
          <img id="size-lg" style={{minHeight: "100%"}} src={require("../images/violin-bckg.jpg")} />
          <img id="size-md" style={{minHeight: "100%"}} src={require("../images/violin-bckg.jpg")} />
          <img id="size-xs" style={{minHeight: "100%"}} src={require("../images/violin-bckg-xs.jpg")} />
          <Carousel.Caption className="centered-carousel-text">
            <Flip left cascade duration="2500"><div><h1 className="main-title-text">Gosyen & Sonus Perfectus</h1></div></Flip>            
            <p><Flip right cascade duration="2500"><div><h3 className="sub-title-text">Distributor Musik & Sports Terpercaya se-Indonesia</h3></div></Flip></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img id="size-lg" style={{minHeight: "100%"}} src={require("../images/drum-lg.jpg")} />
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