import React, { useState } from "react";

import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

import "../styles/App.css";

function App() {
  const [cart, setCart] = useState({});
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <Banner />
      <main>
        <Cart
          cart={cart}
          setCart={setCart}
          cartIsOpen={cartIsOpen}
          setCartIsOpen={setCartIsOpen}
        />
        <ShoppingList
          cart={cart}
          setCart={setCart}
          setCartIsOpen={setCartIsOpen}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
