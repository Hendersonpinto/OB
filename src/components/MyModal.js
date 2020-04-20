// Third Party
import Modal from "react-bootstrap/Modal";
import React from "react";
import Button from "react-bootstrap/Button";

// Local Files
import logo from "../images/logo.svg";
import "../stylesheets/MyModal.scss";

const productQuantity = (product) => {
  return product.quantity > 1 ? (
    <p className="product__quantity">{product.quantity}</p>
  ) : (
    ""
  );
};

const renderModalButton = ({ addeditems, checkout, onHide }) => {
  if (addeditems.length > 0) {
    return (
      <Button variant="secondary" size="md" onClick={() => checkout()}>
        Pay
      </Button>
    );
  }
  return (
    <Button variant="secondary" size="md" onClick={() => onHide()}>
      Go back to store
    </Button>
  );
};

const renderAddedItems = (addeditems, removeItem, paid) => {
  if (!paid) {
    if (addeditems.length > 0) {
      return addeditems.map((product) => {
        return (
          <div className="product__card" key={product.id}>
            <div className="product__image">
              <img src={product.image_link} alt="product.title" />
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
    return <h3>You don't have basics in your bag</h3>;
  }
  return <h3>Your payment was successful</h3>;
};

const MyModal = (props) => {
  // console.log(props);
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
          <img src={logo} width="150px" alt="logo" className="d-inline-block" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Bag</h4>
        <div className="item__list">
          {renderAddedItems(props.addeditems, props.removeitem, props.paid)}
        </div>
        <h3>Total: {props.totalprice} EUR</h3>
      </Modal.Body>
      <Modal.Footer>{renderModalButton(props)}</Modal.Footer>
    </Modal>
  );
};

export default MyModal;
