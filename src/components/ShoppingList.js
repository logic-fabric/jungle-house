import React from "react";

import { PLANT_LIST } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, setCart, setCartIsOpen }) {
  const categories = PLANT_LIST.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

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
          <PlantItem
            cart={cart}
            setCart={setCart}
            setCartIsOpen={setCartIsOpen}
            key={`${name}-${id}`}
            id={id}
            name={name}
            water={water}
            light={light}
            price={price}
            cover={cover}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
