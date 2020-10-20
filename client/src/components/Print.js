import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import API from "../utils/api.js";
import { Row, Col, Container } from "react-bootstrap";
import "../css/print.css";

class Print extends Component {
  state = {
    productData: [],
    duplicateProduct: [],
  }

  componentDidMount() {
    API.getAllProducts().then(res => {
      // this.setState({ productData: res.data })
      var list = []
      var masterList = []
      res.data.map(product => {
        if(product.duplicate == "1" && list.length > 0) {
          list.push(product)
          // console.log(list)
          masterList = [...masterList, list]
          list = [];
          // console.log(masterList)
        } else if (product.duplicate == "1") {
          list.push(product)
        } else if (product.duplicate == "" && list.length == 0) {
          list.push(product)
          // console.log(list)
          masterList = [...masterList, list]
          list = [];
          // console.log(masterList)
        } else if (product.duplicate == "" && list.length > 0) {
          list.push(product);
        }
      })
      // this.setState({ duplicateProduct: masterList })
      setTimeout(() => { this.setState({ duplicateProduct: masterList })}, 2000) 
    })
  }

  renderProductData = () => {
    console.log(this.state.duplicateProduct)
    var groupName = "";
    return this.state.duplicateProduct.map((product) => {
      var reg = /([^-]+)/;
      var reg2 = reg.exec(product[0].prodName);
      
      if(groupName[0] !== reg2[0]) {
        groupName = reg.exec(product[0].prodName);
        console.log(groupName[0])
        console.log(reg2[0])
        return(
          <div className="page">
          <div className="group-title">{reg2[0]}</div>
          <div className="col-sm-3 item-container">
            <div className="img-container2">
              <img className="prod-img" src={"https://d194lx53p20m67.cloudfront.net/" + product[0].prodId + ".jpg"}></img>
            </div>
          
            <div>{product[0].prodId}</div>
            {product.map(dProd => {
              return (
                <div>
                  <div>{dProd.prodName}</div>
                </div>
              )
            })} 
          </div>         
          </div>
        )
      } else {
        console.log("wdwdw")
        return (
          <div className="page2">
            <div className="col-sm-3 item-container">
              <div className="img-container2">
                <img className="prod-img" src={"https://d194lx53p20m67.cloudfront.net/" + product[0].prodId + ".jpg"}></img>
              </div>
            
              <div>{product[0].prodId}</div>
              {product.map(dProd => {
                return (
                  <div>
                    <div>{dProd.prodName}</div>
                  </div>
                )
              })} 
            </div>
          </div>
        )
      }
      
    })
  }

  render() {
    return (
      <div className="row">
          {this.renderProductData()}
      
      </div>
    )
  }
}

export default Print;


  // renderProductData3 = () => {
  //   var list = []
  //   var masterList = []
  //   this.state.productData.map(product => {
  //     if(product.duplicate == "1" && list.length > 0) {
  //       list.push(product)
  //       console.log(list)
  //       masterList = [...masterList, list]
  //       list = [];
  //       console.log(masterList)
  //     } else if (product.duplicate == "1") {
  //       list.push(product)
  //     } else if (product.duplicate == "" && list.length == 0) {
  //       list.push(product)
  //       console.log(list)
  //       masterList = [...masterList, list]
  //       list = [];
  //       console.log(masterList)
  //     } else if (product.duplicate == "" && list.length > 0) {
  //       list.push(product);
  //     }
  //   })
  // }

    // renderProductData = () => {
  //   return this.state.productData.map((product) => {
  //     if(product.duplicate == ""){
  //       return (
  //         <div className="col-sm-3 item-container">
  //           <div className="img-container2">
  //             <img className="prod-img" src={"https://d194lx53p20m67.cloudfront.net/" + product.prodId + ".jpg"} style={{maxWidth: "275px", maxHeight: "275px"}}></img>
  //           </div>
  //           <div>{product.prodId}</div>
  //           <div>{product.prodName}</div>    
  //           <div>{this.state.duplicateProduct.map(dProd => {
  //             return (
  //               <div>{dProd.a} {dProd.b}</div>
  //             )
  //           })}</div>
  //         </div>
  //       )
  //     } else {
  //       return (
  //         <div>{product.prodId}</div>
  //       )
  //     }   
  //   })
  // }
