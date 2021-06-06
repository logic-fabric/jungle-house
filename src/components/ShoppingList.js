import { PLANT_LIST } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, setCart, setCartIsOpen }) {
  return (
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
  );
}

export default ShoppingList;
