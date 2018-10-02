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
          <img className="carImg" src={require("../images/violin-bckg.jpg")} />
          <Carousel.Caption className="centered-carousel-text">
            <h1 className="main-title-text">Gosyen & Sonus Perfectus</h1>             
            <p><h3 className="sub-title-text">Distributor Musik & Sports Terpercaya se-Indonesia</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="carImg" src={require("../images/drum.jpg")} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="carImg" src={require("../images/violin-bckg.jpg")} />
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

/* <header>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner">
    
    <div className="carousel-item active">
      <img className="carImg d-block" src={require("../images/violin-bckg.jpg")} alt="First slide" />
      <div className="carousel-caption intro">
        Gosyen & Sonus Perfectus
      </div>
      <div className="carousel-caption">
        <button type="button" className="btn btn-outline-light">Musik</button>
        <span>                                                  </span>
        <button type="button" className="btn btn-outline-light">Sports</button>
      </div>
    </div>

    <div className="carousel-item">
      <img className="carImg d-block" src={require("../images/drum.jpg")} alt="Second slide" />
    </div>

    <div className="carousel-item">
      <img className="carImg d-block" src={require("../images/violin-bckg.jpg")} alt="Third slide" />
    </div>

  </div>
  
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</header> */

export default ControlledCarousel;