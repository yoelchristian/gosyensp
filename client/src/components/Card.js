import React, { Component } from "react";
import API from "../utils/api.js";
import CardDetail from "./CardDetail.js";
import SideNav  from "./SideNav.js";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Card extends Component {
  state = {
    productData: [],
    paramsState: {},
    loading: false
  };

  componentDidMount() {
    this.scrollTo()
    if(this.props.match.url === "/products") {
      this.getProduct();
    } else {
      if(this.props.match.params.subcategory) {
        this.getProductBySubcategory();
        this.scrollTo()
      } else if (this.props.match.params.category) {
        this.getProductByCategory();
        this.scrollTo()
      }
    }
    this.setState({paramsState: this.props.match.params})
    
  }

  componentDidUpdate() {
    this.scrollTo()
    if(JSON.stringify(this.props.match.params) !== JSON.stringify(this.state.paramsState)) {
      this.setState({paramsState: this.props.match.params})
      if(this.props.match.params.subcategory) {
        this.getProductBySubcategory();
        this.scrollTo()
      } else if (this.props.match.params.category) {
        this.getProductByCategory();
        this.scrollTo()
      }
    }
  }

  scrollTo = () => {
    scroller.scrollTo("product-top", {duration: 1500, smooth: true, offset: -100});
  }

  getProduct = () => {
    this.setState({ loading: true })
    this.setState({ productData: [] })
    API.getAllProducts().then((res) => {
      setTimeout(() => { this.setState({ loading: false }); this.setState({ productData: res.data })}, 1000) 
    });
  }

  getProductByCategory = () => {
    this.setState({ loading: true })
    this.setState({ productData: [] })
    API.getProductByCategory(this.props.match.params.category).then((res) => {
      setTimeout(() => { this.setState({ loading: false }); this.setState({ productData: res.data })}, 1000) 
    });
  }

  getProductBySubcategory = () => {
    this.setState({ loading: true })
    this.setState({ productData: [] })
    API.getProductBySubcategory(this.props.match.params.subcategory).then((res) => {
      setTimeout(() => { this.setState({ loading: false }); this.setState({ productData: res.data })}, 1000) 
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
      <div className="container card-container">
        <div className="row">
          <div className="col-sm-3 hidden-xs">
            <SideNav />
          </div>
          <Element name="product-top" className="element">
          <div className="col-sm-9">
            <div>
              {this.renderProductData()}
              <div className="loader"><PropagateLoader loading={this.state.loading} color={"#182c39"} size={15}/></div>
            </div>
          </div>
          </Element>
        </div>
      </div>
    )
  }
}

export default Card;