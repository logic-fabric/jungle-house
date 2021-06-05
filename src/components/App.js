import React from "react";

import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Banner />
        <main>
          <Cart />
          <ShoppingList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
