import { PLANT_LIST } from "../data/plantList";
import "../styles/Categories.css";

function Categories() {
  const categories = PLANT_LIST.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <ul className="plants__categories">
      {categories.map((category, index) => (
        <li className="plant-category" key={`${category}-${index}`}>
          {category}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
