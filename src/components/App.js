import React from "react";

import Banner from "./Banner";
//import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Banner />
        {/* <Cart /> */}
        <ShoppingList />
      </div>
    );
  }
}

export default App;