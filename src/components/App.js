import React from "react";
import { connect } from "react-redux";

import "./App.scss";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Filters from "./Filters";
import ProductsList from "./ProductsList";
import MyModal from "./MyModal";
import { showModal } from "../actions";
import { filterProducts } from "../actions";
import { removeFromCart } from "../actions";

function App(props) {
  return (
    <div>
      <NavBar
        genders={props.genders}
        filterProducts={props.filterProducts}
      ></NavBar>
      <Hero></Hero>
      <section className="collection__wrapper">
        <h1 className="collection__title">SUMMER COLLECTION</h1>
        <div className="collection">
          <Filters
            filterProducts={props.filterProducts}
            colors={props.colors}
            sizes={props.sizes}
            genders={props.genders}
          ></Filters>
          <ProductsList></ProductsList>
        </div>
      </section>
      <MyModal
        show={props.modalState}
        onHide={props.showModal}
        totalprice={props.totalPrice}
        addeditems={props.addedItems}
        removeitem={props.removeFromCart}
      />
    </div>
  );
}

const mapStateToProps = ({ modal, cart }) => {
  return {
    modalState: modal.show,
    addedItems: cart.addedItems,
    totalPrice: cart.totalPrice,
    colors: cart.colors,
    sizes: cart.sizes,
    genders: cart.genders,
  };
};
export default connect(mapStateToProps, {
  showModal,
  filterProducts,
  removeFromCart,
})(App);
