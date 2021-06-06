import { useState } from "react";

import Banner from "./Banner";
import Cart from "./Cart";
import Categories from "./Categories";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

import "../styles/App.css";

function App() {
  const [cart, setCart] = useState({});
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
        <div>
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ShoppingList
            cart={cart}
            setCart={setCart}
            setCartIsOpen={setCartIsOpen}
            selectedCategory={selectedCategory}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
