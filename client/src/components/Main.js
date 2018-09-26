import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import API from "../utils/api.js";
import NavigationBar from "./NavigationBar";
import ControlledCarousel from "./ControlledCarousel.js";
import Card from "./Card.js";
import ProductModal from "./ProductModal.js";
import SideNav  from "./SideNav.js";
import TestComponent from "./TestComponent.js";

class Main extends Component {

  render() {
    return (
      <Router>
        <div className="main-container">
          <NavigationBar />
          <ControlledCarousel />
          
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <SideNav />
              </div>
              <div className="col-sm-9">
                <Switch>
                  <Route exact path="/" component= { TestComponent } />
                  <Route exact path="/products" component= { Card } />
                  <Route exact path="/products/:id" component= { ProductModal } />
                </Switch>
              </div>
              
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Main;