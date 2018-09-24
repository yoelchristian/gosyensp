import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import API from "../utils/api.js";
import ProductModalCard from "./ProductModalCard.js";


class ProductDetail extends Component {
  state = {
    product: {}
  };
  
  componentDidMount() {
    API.getProductDetails(this.props.match.params.id)
      .then((res) => {
        this.setState({ product: res.data })
      })
      .catch(err => console.log(err));
  }

  closeModal = () => {
    const modal = document.getElementsByClassName('modal show')[0];
    const fade = document.getElementsByClassName('modal-backdrop show')[0];
    modal.className = modal.className.replace('show', 'fade');
    fade.className = fade.className.replace('show', '');
  }

  render() {
    return (
      <div>
        <Helmet>
        
         <script>$('#exampleModal').modal('show')</script>
            
        </Helmet>
        <ProductModalCard 
          descript={this.state.product.descript}
          price={this.state.product.price}
          linkURL={this.state.product._id}
          closeModal={this.closeModal}
        />
      </div>
      
    )
  }
};

export default ProductDetail;