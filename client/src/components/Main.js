import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import ControlledCarousel from "./ControlledCarousel.js";
import Card from "./Card.js";
import SideNav  from "./SideNav.js";
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
          
          
          <div className="container">
            <div className="row">
              <div className="col-sm-3 hidden-xs">
                <SideNav />
              </div>
              <div className="col-sm-9">
                <Switch>
                  <Route exact path="/about" component= { About } />
                  <Route exact path="/products" component= { Card } />
                  <Route exact path="/products/:category" component= { Card } />
                  <Route exact path="/products/:category/:subcategory" component= { Card } />
                </Switch>
              </div>
              
            </div>
          </div>
        </div>
        <ScrollToTop />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" />
        <Footer />
        </div>
        
      </Router>
    )
  }
}

export default withRouter(Main);