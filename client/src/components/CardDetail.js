import React from "react";
import Img from "react-image";
import BounceLoader from "react-spinners/BounceLoader";
import { Modal, Button } from "react-bootstrap";

import "../css/card.css";

class CardDetail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      product: {},
      show: false
    };
  }

  componentDidMount() {
    
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  defaultImage(ev) {
    ev.taget.src = require("../images/logo1.png")
  }

  render() {
    return (
      <div className="col-lg-4 col-md-6" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div onClick={this.handleShow} className="card">
        <div className="card-inner">
          <div className="img-container" style={{width:"auto", height:"70%", paddingTop: "10px"}}>
            <Img src={"https://d194lx53p20m67.cloudfront.net/" + this.props.itemCode + ".jpg"} style={{maxWidth: "100%", maxHeight: "100%"}} loader={<BounceLoader />}/>
          </div>
          <div className="info-container">
            <h4><b>{this.props.title}</b></h4>
            <h6>{this.props.itemCode}</h6>        
            <p>Harga: Rp. {this.props.itemCategory}</p>
          </div>
        </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
   
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CardDetail;