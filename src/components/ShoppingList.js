import React from "react";

import { plantList } from "../data/plantList";

class ShoppingList extends React.Component {
  render() {
    const categories = plantList.reduce(
      (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
      []
    );

    return (
      <div>
        <ul>
          {categories.map((category, index) => (
            <li key={`${category}-${index}`}>{category}</li>
          ))}
        </ul>
        <ul>
          {plantList.map((plant) => (
            <li key={`${plant.id}`}>{plant.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
