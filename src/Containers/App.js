import React, { Component } from "react";
// import logo from "../logo.svg";
import "./App.css";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Header from "../Shared/Header/Header";
import HomePage from "../HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <HomePage></HomePage>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
