import "../styles/Cart.css";

function Cart({ cart, setCart, cartIsOpen, setCartIsOpen }) {
  const items = Object.keys(cart);
  const total = items.reduce(
    (acc, item) => acc + cart[item].quantity * cart[item].price,
    0
  );

  return cartIsOpen ? (
    <section className="cart cart--open">
      <button onClick={() => setCartIsOpen(false)}>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-chevron-circle-left"></i>
      </button>

      <div className="cart__content">
        <h2 className="cart__title">Votre panier</h2>

        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li key={item}>
                {cart[item].quantity} {item} à {cart[item].price}&nbsp;€
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <em>Votre panier est vide</em>
          </p>
        )}

        <p className="cart-total">Total {total}&nbsp;€</p>

        <button className="btn-empty-cart" onClick={() => setCart({})}>
          Vider le panier
        </button>
      </div>
    </section>
  ) : (
    <section className="cart">
      <button onClick={() => setCartIsOpen(true)}>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-chevron-circle-right"></i>
      </button>

      <div className="cart__content">
        <h2 className="cart__title">Votre panier</h2>

        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li key={item}>
                {cart[item].quantity} {item} à {cart[item].price}&nbsp;€
              </li>
            ))}
          </ul>
        ) : (
          <p>Votre panier est vide</p>
        )}

        <p className="cart-total">Total {total}&nbsp;€</p>
      </div>
    </section>
  );
}

export default Cart;
