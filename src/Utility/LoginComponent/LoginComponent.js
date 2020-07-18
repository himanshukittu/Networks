import React, { Fragment } from "react";
import classes from "./LoginComponent.module.css";

let LoginComponent = () => {
  return (
    <Fragment>
      <div
        className="card"
        style={{ marginTop: "0vh", backgroundColor: "#000000b3" }}
      >
        <div className="card-header">Login</div>
        <div className="card-body">
          <input
            type="text"
            className={"form-control " + classes.bgTrans}
            placeholder="Username/ Email/ Phone"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={"form-control " + classes.bgTrans}
          />
          <br />
          <input
            type="button"
            value="Login"
            className={"form-control " + classes.bgTrans}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default LoginComponent;
