// Third Party
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";

// Local files
import { showModal } from "../actions";
import logo from "../images/logo.svg";
import bag from "../images/bag.svg";
import "../stylesheets/NavBar.scss";
import BagCounter from "./BagCounter";

class NavBar extends React.Component {
  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  renderLinks({ genders, filterProducts }) {
    return genders.map((gender) => {
      return (
        <Nav.Link
          className="navbar__link"
          data-filtervalue={gender}
          data-filterattr="gender"
          onClick={(e) => filterProducts(e.target)}
          key={gender}
        >
          {this.capitalize(gender)}
        </Nav.Link>
      );
    });
  }

  render() {
    return (
      <Navbar fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt="logo-navbar"
            src={logo}
            className="d-inline-block align-top logoNavbar"
          />
        </Navbar.Brand>
        <div className="navbar__links">
          {this.renderLinks(this.props)}
          <Nav.Link href="#features" onClick={() => this.props.showModal()}>
            <BagCounter />
            <img
              src={bag}
              width="30px"
              className="d-inline-block align-top bagNavbar"
              alt="bag-icon"
            />
          </Nav.Link>
        </div>
      </Navbar>
    );
  }
}

export default connect(null, { showModal })(NavBar);
