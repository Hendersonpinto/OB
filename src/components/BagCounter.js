// Third Party
import React from "react";
import { connect } from "react-redux";

const BagCounter = ({ addedItems }) => {
  return <span>Bag {addedItems > 0 ? `(${addedItems})` : ""}</span>;
};

const mapStateToProps = ({ cart }) => {
  const totalInCart = () => {
    if (cart.addedItems.length > 0) {
      return cart.addedItems.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0);
    } else {
      return 0;
    }
  };

  return {
    addedItems: totalInCart(),
  };
};

export default connect(mapStateToProps)(BagCounter);
