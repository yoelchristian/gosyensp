import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import ControlledCarousel from "./ControlledCarousel.js";
import Card from "./Card.js";
import About from "./About.js";
import Footer from "./Footer.js";
import ScrollToTop from "./ScrollToTop.js";

class Main extends Component {

  render() {
    return (
      <Router>
        <div>
        <div className="main-container">
        
          <NavigationBar />
          <ControlledCarousel />
  
          <Switch>
            <Route exact path="/" component= { About } />
            <Route exact path="/products" component= { Card } />
            <Route exact path="/products/:category" component= { Card } />
            <Route exact path="/products/:category/:subcategory" component= { Card } />
          </Switch>
            
        </div>

        <ScrollToTop />
        <Footer />
        <img src={require("../images/wyler-sm.png")} />
        </div>
        
      </Router>
    )
  }
}

export default withRouter(Main);