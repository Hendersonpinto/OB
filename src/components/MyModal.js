import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";
import logo from "../images/logo.svg";
import "./MyModal.scss";

const renderAddedItems = (addeditems, removeItem) => {
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
            <Button
              className="removeButton"
              variant="secondary"
              size="md"
              onClick={() => removeItem(product)}
            >
              remove
            </Button>
          </div>
          <div className="product__description">
            <p style={{ textDecoration: "underline" }}>{product.title}</p>
            <div className="product__details">
              <p>
                Size: <span>{product.size}</span>
              </p>
              <p>Color: {product.color}</p>
              <p>
                Price:{" "}
                {parseFloat(product.price.match("-?[0-9]+[.]*[0-9]*")) *
                  product.quantity}{" "}
                €
              </p>
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
        <div className="item__list">
          {renderAddedItems(props.addeditems, props.removeitem)}
        </div>
        <h3>Total: {props.totalprice} EUR</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="lg" block onClick={props.onHide}>
          {props.addeditems.length > 0
            ? "Proceed to check out"
            : "Go back to store"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
