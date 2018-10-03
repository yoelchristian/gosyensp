import React, { Component } from "react";
import API from "../utils/api.js";
import CardDetail from "./CardDetail.js";
import SideNav  from "./SideNav.js";
import PropagateLoader from "react-spinners/PropagateLoader";


class Card extends Component {
  state = {
    productData: [],
    paramsState: {},
    loading: false
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
    this.setState({ loading: true })
    this.setState({ productData: [] })
    API.getAllProducts().then((res) => {
      setTimeout(() => { this.setState({ loading: false }); this.setState({ productData: res.data })}, 1500) 
    });
  }

  getProductByCategory = () => {
    this.setState({ loading: true })
    this.setState({ productData: [] })
    API.getProductByCategory(this.props.match.params.category).then((res) => {
      setTimeout(() => { this.setState({ loading: false }); this.setState({ productData: res.data })}, 1500) 
    });
  }

  getProductBySubcategory = () => {
    this.setState({ loading: true })
    this.setState({ productData: [] })
    API.getProductBySubcategory(this.props.match.params.subcategory).then((res) => {
      setTimeout(() => { this.setState({ loading: false }); this.setState({ productData: res.data })}, 1500) 
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
              <div className="loader"><PropagateLoader loading={this.state.loading} color={"#182c39"} size={15}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;