import React, { useState } from "react";

import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

import "../styles/App.css";

function App() {
  const [cart, setCart] = useState({});

  return (
    <div className="app-wrapper">
      <Banner />
      <main>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
