import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <nav class={"navbar navbar-light fixed-top " + classes.customNav}>
          <button
            class="navbar-brand"
            style={{
              fontFamily: "Luckiest Guy, cursive",
              fontSize: "30px",
              paddingTop: "4px",
              paddingBottom: "0px",
              color: "white",
              backgroundColor: "transparent",
              borderRadius: "42%",
            }}
          >
            SN
          </button>
        </nav>
      </Fragment>
    );
  }
}

export default connect(null, null)(Header);
