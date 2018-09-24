import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../css/card.css";

const Card = props =>

<div className="col-sm-6 col-md-4 mb-4">
<Link to={"/products/" + props.linkURL}>
  <div className="card">
    <div className="img-container">
      <img className="card-image" src={require("../images/5B8_4979.jpg")} />
    </div>
    <div className="info-container">
      <Link to={"/products/" + props.linkURL}><h4><b>{props.title}</b></h4></Link>
      <h6>{props.itemCode}</h6>
      <p>Harga: {props.itemCategory}</p>
      <p>Stock: {props.qtyOnhand} pcs</p>
      <p>Stock: {props.qtyOnhand} pcs</p>
      <p>Stock: {props.qtyOnhand} pcs</p>

    </div>
  </div>
  </Link>
</div>

export default Card;