import React, { Fragment } from "react";
import "./App.css";
import Header from "../Shared/Components/HeaderComponent/Header";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Fragment>
      <Container>
        <Header></Header>
      </Container>
    </Fragment>
  );
}

export default App;
