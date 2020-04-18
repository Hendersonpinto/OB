import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";

import { showModal } from "../actions";
import logo from "../images/logo.svg";
import bag from "../images/bag.svg";
import "./NavBar.scss";
import BagCounter from "./BagCounter";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="200px"
            className="d-inline-block align-top logoNavbar"
          />
        </Navbar.Brand>
        <Nav.Link href="#features" onClick={() => this.props.showModal()}>
          <BagCounter />
          <img
            src={bag}
            width="30px"
            className="d-inline-block align-top bagNavbar"
          />
        </Nav.Link>
      </Navbar>
    );
  }
}

export default connect(null, { showModal })(NavBar);
