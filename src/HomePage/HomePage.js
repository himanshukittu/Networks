import React, { Component, Fragment } from "react";
import classes from "./HomePage.module.css";
import eins from "../assets/einstein.jpg";
import space from "../assets/space.jpg";
import LoginComponent from "../Utility/LoginComponent/LoginComponent";
import SignupComponent from "../Utility/SignupComponent/SignupComponent";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="row" style={{ height: "100vh" }}>
          <div className={"col-2 " + classes.bgDark}>
            <span className={classes.title}>Science Network</span>
          </div>

          <div className={"col " + classes.colN}>
            <div className={"card bg-dark text-white " + classes.borderRNon}>
              <img
                className={"card-img " + classes.imageProp}
                src={space}
                alt="Left pic"
                loading="lazy"
              />
              <div className="card-img-overlay">RSS feed</div>
            </div>
          </div>

          <div className={"col " + classes.colN}>
            <div className={"card bg-dark text-white " + classes.borderRNon}>
              <img
                className={"card-img " + classes.imageProp}
                src={eins}
                alt="Right pic"
                loading="lazy"
              />
              <div className="card-img-overlay">
                <LoginComponent></LoginComponent>
                <SignupComponent></SignupComponent>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
