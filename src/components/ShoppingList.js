import React from "react";

import { PLANT_LIST } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

class ShoppingList extends React.Component {
  render() {
    const categories = PLANT_LIST.reduce(
      (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
      []
    );

    return (
      <div>
        <ul className="jh-plants-categories">
          {categories.map((category, index) => (
            <li className="jh-plant-category" key={`${category}-${index}`}>
              {category}
            </li>
          ))}
        </ul>
        <ul className="jh-plants-list">
          {PLANT_LIST.map(({id, name, water, light, cover}) => (
            <PlantItem
              key={`${name}-${id}`}
              id={id}
              name={name}
              water={water}
              light={light}
              cover={cover}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
