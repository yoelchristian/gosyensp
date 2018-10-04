import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "../css/carousel.css";

class ControlledCarousel extends React.Component {
  render() {
    return (
      <Carousel
        interval={3500}
        className="carousel-intro"
        pauseOnHover={false}
      >
        <Carousel.Item className="carousel-item">
          <img id="size-lg" style={{minHeight: "100%"}} src={require("../images/violin-bckg.jpg")} />
          <img id="size-md" style={{minHeight: "100%"}} src={require("../images/violin-bckg.jpg")} />
          <img id="size-xs" style={{minHeight: "100%"}} src={require("../images/violin-bckg-xs.jpg")} />
          <img id="size-land" style={{minHeight: "100%"}} src={require("../images/violin-bckg.jpg")} />
          <Carousel.Caption className="centered-carousel-text">
            <Fade duration={3500}><div><h1 className="main-title-text">Gosyen & Sonus Perfectus</h1></div></Fade>            
            <p><Fade delay={1000} duration={1500}><div><h3 className="sub-title-text">Distributor Musik & Sports Terpercaya se-Indonesia</h3></div></Fade></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img id="size-lg" style={{ minHeight: "100%"}} src={require("../images/drum2-lg.jpg")} />
          <img id="size-md" style={{ minHeight: "100%"}} src={require("../images/drum2-md.jpg")} />
          <img id="size-xs" style={{ minHeight: "100%"}} src={require("../images/drum2-xs.jpg")} />
          <img id="size-land" style={{ minHeight: "100%"}} src={require("../images/drum2-ls.jpg")} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img id="size-lg" style={{ minHeight: "100%"}} src={require("../images/drum2-lg.jpg")} />
          <img id="size-md" style={{ minHeight: "100%"}} src={require("../images/drum2-md.jpg")} />
          <img id="size-xs" style={{ minHeight: "100%"}} src={require("../images/drum2-xs.jpg")} />
          <img id="size-land" style={{ minHeight: "100%"}} src={require("../images/drum2-ls.jpg")} />

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