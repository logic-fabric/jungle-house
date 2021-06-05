import React from "react";

import CareScale from "./Carescale";
import "../styles/PlantItem.css";

function PlantItem(props) {
  const {
    cart,
    setCart,
    setCartIsOpen,
    id,
    name,
    water,
    light,
    price,
    cover,
  } = props;

  function addToCart(name, price) {
    const items = Object.keys(cart);

    if (items.includes(name)) {
      setCart({
        ...cart,
        [name]: { quantity: cart[name].quantity + 1, price },
      });
    } else {
      setCart({
        ...cart,
        [name]: { quantity: 1, price },
      });
    }
  }

  return (
    <li key={id} className="plant-item">
      <div className="plant-item__cover">
        <img src={cover} alt={name} />
      </div>

      <div className="plant-item__price">{price}&nbsp;€</div>

      <div className="plant-item__infos">
        <h2 className="plant-item__title">{name}</h2>

        <div className="plant-item__interactions">
          <button
            className="btn-add-to-cart"
            onClick={() => {
              setCartIsOpen(true);
              addToCart(name, price);
            }}
          >
            Ajouter
          </button>

          <div className="plant-item__scales">
            <CareScale id={id} careType="light" scaleValue={light} />
            <CareScale id={id} careType="water" scaleValue={water} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default PlantItem;
