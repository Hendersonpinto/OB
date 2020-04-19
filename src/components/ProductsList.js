import React from "react";
import { connect } from "react-redux";

import "./ProductsList.scss";
import { addToCart } from "../actions";
import logo from "../images/logo.svg";

class ProductsList extends React.Component {
  checkAvailability(product) {
    if (product.availability === "out of stock") {
      return <p className="notice sold-out">SOLD OUT</p>;
    }
    return <p className="notice price">{product.price}</p>;
  }

  renderProducts() {
    return this.props.products.map((product) => {
      const available =
        product.availability === "out of stock" ? "sold-out" : "";

      return (
        <div
          className={`product__card ${available}`}
          onClick={(e) => {
            this.props.addToCart(product);
          }}
          key={product.id}
        >
          <div className={`product__image ${available}`}>
            <img src={product.image_link} />
            <div className="product__label">
              <img alt="" src={logo} width="150px" />
              <h2>Add to bag</h2>
              <p>{product.price} €</p>
            </div>
            {this.checkAvailability(product)}
          </div>
          <div className="product__description">
            <h3>{product.title}</h3>
            <div className="product__details">
              <p>{product.size}</p>
              <p>{product.color}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="products">
        <div className="productsList">{this.renderProducts()}</div>
      </section>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    products: cart.filteredItems,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductsList);
