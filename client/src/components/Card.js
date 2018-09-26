import React, { Component } from "react";
import API from "../utils/api.js";
import CardDetail from "./CardDetail.js";

class Card extends Component {
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

  renderProductData = () => {
    return this.state.productData.map(product => (
      <CardDetail 
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
      <div>
        {this.renderProductData()}
      </div>
    )
  }
}

export default Card;