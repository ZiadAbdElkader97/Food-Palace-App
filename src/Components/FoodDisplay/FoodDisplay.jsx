/* eslint-disable react/prop-types */
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2 className="food-h2">Top dishes near you</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                img={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
