import React from "react";

class Cart extends React.Component {
  render() {
    const prices = {
      monstera: 8,
      ivy: 10,
      flowers: 15,
    };

    return (
      <section>
        <h2>Panier</h2>

        <ul>
          <li>Monstera: {prices.monstera}&nbsp;€</li>
          <li>Ivy: {prices.ivy}&nbsp;€</li>
          <li>Flowers: {prices.flowers}&nbsp;€</li>
        </ul>

        <p>Total : {prices.monstera + prices.ivy + prices.flowers}&nbsp;€</p>
      </section>
    );
  }
}

export default Cart;
