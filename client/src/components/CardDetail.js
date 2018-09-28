import React from "react";
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
    console.log("adwd")
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="col-lg-4">
        <div onClick={this.handleShow} className="card">
          <div className="img-container">
            <img className="card-image" />
          </div>
          <div className="info-container">
            <h4><b>{this.props.title}</b></h4>
            <h6>{this.props.itemCode}</h6>
            <p>Harga: {this.props.itemCategory}</p>
            <p>Stock: {this.props.qtyOnhand} pcs</p>
            <p>Stock: {this.props.qtyOnhand} pcs</p>
            <p>Stock: {this.props.qtyOnhand} pcs</p>

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