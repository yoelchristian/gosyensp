import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

const ProductModalCard = props =>

<div className="modal fade" data-dismiss="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{props.descript}</h5>
        
        <Link to ={"/"}><button type="button" data-dismiss="modal" className="btn btn-primary">Primary</button></Link>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
      <Link to ={"/"} onClick={() => props.closeModal()}>asd</Link>
      </div>
    </div>
  </div>
</div>  

export default ProductModalCard;