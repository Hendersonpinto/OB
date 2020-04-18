import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
import logo from "../images/logo.svg";
import "./MyModal.scss";

const renderAddedItems = (addeditems) => {
  const productQuantity = (product) => {
    return product.quantity > 1 ? (
      <p className="product__quantity">{product.quantity}</p>
    ) : (
      ""
    );
  };

  if (addeditems.length > 0) {
    return addeditems.map((product) => {
      return (
        <div className="product__card" key={product.id}>
          <div className="product__image">
            <img src={product.image_link} />
            {productQuantity(product)}
          </div>
          <div className="product__description">
            <p>{product.title}</p>
            <div className="product__details">
              <p>{product.size}</p>
              <p>{product.color}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return <p>You don't have anything in your bag</p>;
};

const MyModal = (props) => {
  return (
    <Modal
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={logo} width="150px" className="d-inline-block" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Bag</h4>
        <div className="item__list">{renderAddedItems(props.addeditems)}</div>
        <p>Total: {props.totalprice} EUR</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="lg" block onClick={props.onHide}>
          {props.addeditems.length > 0 ? "Go to check out" : "Go back to store"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
