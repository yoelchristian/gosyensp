import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import API from "../utils/api.js";
import NavigationBar from "./NavigationBar";
import ControlledCarousel from "./ControlledCarousel.js";
import Card from "./Card.js";
import ProductModal from "./ProductModal.js";

class Main extends Component {
  state = {
    productData: []
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    API.getAllProducts().then((res) => {
      this.setState({ productData: res.data })
    });
  }

  // asdw = () => {
  //   API.getProductDetails(this.props.match.params.id)
  //     .then((res) => {
  //       this.setState({ product: res.data })
  //     })
  //     .catch(err => console.log(err)); 
  // }

  renderProductData = () => {
    return this.state.productData.map(product => (
      <Card 
        key={ product._id }
        itemCode={ product.itemcode }
        lastSold={ product.lastsold }
        title={ product.descript }
        linkURL={ product._id }
        itemCategory={ product.price }
        qtyOnhand={ product.onhand }
      />
    ));
  };
  
  render() {
    return (
      <Router>
        <div className="main-container">
          <NavigationBar />
          <ControlledCarousel />
          <div className="container">
            <div className="row">
              {this.renderProductData()}
            </div>
          </div>
          <Switch>
            <Route exact path="/products/:id" component= { ProductModal } />
          </Switch>
        </div>  
      </Router>
    )
  }
}

export default Main;