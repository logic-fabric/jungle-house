import React from "react";

import { plantList } from "../data/plantList";
import "../styles/ShoppingList.css";

class ShoppingList extends React.Component {
  render() {
    const categories = plantList.reduce(
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
          {plantList.map((plant) => (
            <li className="jh-plant-item" key={`${plant.id}`}>
              {plant.name}{" "}
              {plant.isBestSale ? (
                <span className="jh-best-sales">meilleures ventes</span>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
