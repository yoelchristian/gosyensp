import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import "../css/returntotop.css";

class ScrollToTops extends Component {

  render() {
    return (
      <ScrollToTop showUnder={160} duration={1000} style={{right: 50}}>
      
      <div id="return-to-top"><i className="glyphicon glyphicon-chevron-up"></i></div></ScrollToTop>
    )
  }
}

export default ScrollToTops;