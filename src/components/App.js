// Third Party
import React from "react";
import { connect } from "react-redux";

// Local Files
import "../stylesheets/App.scss";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Filters from "./Filters";
import ProductsList from "./ProductsList";
import MyModal from "./MyModal";
import { showModal } from "../actions";
import { filterProducts } from "../actions";
import { removeFromCart } from "../actions";
import { checkOut } from "../actions";

function App({
  genders,
  filterProducts,
  colors,
  sizes,
  modalState,
  showModal,
  removeFromCart,
  addedItems,
  totalPrice,
  checkOut,
  paid,
}) {
  return (
    <div>
      <NavBar genders={genders} filterProducts={filterProducts}></NavBar>
      <Hero></Hero>
      <section className="collection__wrapper">
        <h1 className="collection__title">SUMMER COLLECTION</h1>
        <div className="collection">
          <Filters
            filterProducts={filterProducts}
            colors={colors}
            sizes={sizes}
            genders={genders}
          ></Filters>
          <ProductsList></ProductsList>
        </div>
      </section>
      <MyModal
        paid={paid}
        show={modalState}
        onHide={showModal}
        totalprice={totalPrice}
        addeditems={addedItems}
        removeitem={removeFromCart}
        checkout={checkOut}
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
    paid: cart.paid,
  };
};
export default connect(mapStateToProps, {
  showModal,
  filterProducts,
  removeFromCart,
  checkOut,
})(App);
