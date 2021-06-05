import React from "react";

import { PLANT_LIST } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, setCart }) {
  const categories = PLANT_LIST.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

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
    <div>
      <ul className="plants__categories">
        {categories.map((category, index) => (
          <li className="plant-category" key={`${category}-${index}`}>
            {category}
          </li>
        ))}
      </ul>
      <ul className="plants__gallery">
        {PLANT_LIST.map(({ id, name, water, light, price, cover }) => (
          <React.Fragment>
            <PlantItem
              key={`${name}-${id}`}
              id={id}
              name={name}
              water={water}
              light={light}
              price={price}
              cover={cover}
            />
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
