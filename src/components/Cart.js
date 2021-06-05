import React, { useState } from "react";

import "../styles/Cart.css";

function Cart() {
  const prices = {
    monstera: 8,
    ivy: 10,
    flowers: 15,
  };

  const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section className="cart cart--open">
      <button onClick={() => setIsOpen(false)}>
        <i class="fas fa-shopping-cart"></i>
        <i class="fas fa-chevron-circle-left"></i>
      </button>

      <div className="cart__content">
        <h2 className="cart__title">Votre panier</h2>

        <ul>
          <li>Monstera {prices.monstera}&nbsp;€</li>
          <button className="btn-add-to-cart" onClick={() => setCart(cart + 1)}>
            Ajouter
          </button>
        </ul>

        <p className="cart-total">Total {cart * prices.monstera}&nbsp;€</p>
      </div>
    </section>
  ) : (
    <section className="cart">
      <button onClick={() => setIsOpen(true)}>
        <i class="fas fa-shopping-cart"></i>
        <i class="fas fa-chevron-circle-right"></i>
      </button>

      <div className="cart__content">
        <h2>Votre panier</h2>

        <ul>
          <li>Monstera {prices.monstera}&nbsp;€</li>
          <button className="btn-add-to-cart" onClick={() => setCart(cart + 1)}>
            Ajouter
          </button>
        </ul>

        <p className="cart-total">Total {cart * prices.monstera}&nbsp;€</p>
      </div>
    </section>
  );
}

export default Cart;
