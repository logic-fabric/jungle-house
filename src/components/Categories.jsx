import { PLANT_LIST } from "../data/plantList";
import "../styles/Categories.css";

function Categories({ selectedCategory, setSelectedCategory }) {
  const categories = PLANT_LIST.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <ul className="plants__categories">
      {categories.map((category, index) => (
        <li
        className=
        {selectedCategory === category ? "plant-category selected-category" : "plant-category"}
          key={`${category}-${index}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </li>
      ))}
      <li
        className=
        {selectedCategory === "all" ? "plant-category selected-category" : "plant-category"}
        onClick={() => setSelectedCategory("all")}
      >
        toutes
      </li>
    </ul>
  );
}

export default Categories;
