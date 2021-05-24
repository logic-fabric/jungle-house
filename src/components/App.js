import React from "react";

import Banner from "./Banner";
import Cart from "./Cart";

import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Cart />
      </React.Fragment>
    );
  }
}

export default App;
