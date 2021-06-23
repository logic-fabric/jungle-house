import { PLANT_LIST } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, setCart, setCartIsOpen, selectedCategory }) {
  return (
    <div className="shopping-list">
      <ul className="plants__gallery">
        {PLANT_LIST.map(({ id, name, category, isBestSale, water, light, price, cover }) =>
          selectedCategory === category || selectedCategory === "all" ? (
            <PlantItem
              cart={cart}
              setCart={setCart}
              setCartIsOpen={setCartIsOpen}
              key={`${name}-${id}`}
              id={id}
              name={name}
              isBestSale={isBestSale}
              water={water}
              light={light}
              price={price}
              cover={cover}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
