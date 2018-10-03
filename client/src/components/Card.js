import React, { Component } from "react";
import API from "../utils/api.js";
import CardDetail from "./CardDetail.js";
import SideNav  from "./SideNav.js";

class Card extends Component {
  state = {
    productData: [],
    paramsState: {}
  };

  componentDidMount() {
    console.log("refreshed")
    this.setState({paramsState: this.props.match.params})
    if(this.props.match.params.subcategory) {
      this.getProductBySubcategory();
    } else if (this.props.match.params.category) {
      this.getProductByCategory();
    }
  }

  componentDidUpdate() {
    if(JSON.stringify(this.props.match.params) !== JSON.stringify(this.state.paramsState)) {
      this.setState({paramsState: this.props.match.params})
      if(this.props.match.params.subcategory) {
        this.getProductBySubcategory();
      } else if (this.props.match.params.category) {
        this.getProductByCategory();
      }
    }
  }

  getProduct = () => {
    API.getAllProducts().then((res) => {
      this.setState({ productData: res.data })
    });
  }

  getProductByCategory = () => {
    API.getProductByCategory(this.props.match.params.category).then((res) => {
      this.setState({ productData: res.data })
    });
  }

  getProductBySubcategory = () => {
    API.getProductBySubcategory(this.props.match.params.subcategory).then((res) => {
      this.setState({ productData: res.data })
    })
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
      <div className="container">
        <div className="row">
          <div className="col-sm-3 hidden-xs">
            <SideNav />
          </div>
          <div className="col-sm-9">
            <div>
              {this.renderProductData()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;