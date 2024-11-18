/* eslint-disable react/prop-types */
import "./FoodItem.css";
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

export default function FoodItem({ id, name, price, description, img }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img">
        <img className="food-image" src={img} />
        {!cartItems[id] ? (
          <img
            className="add-icon"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-counter">
            <img
              className="counter-icon"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img
              className="counter-icon"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-name-rating">
          <p className="name-p">{name}</p>
          <img className="name-img" src={assets.rating_starts} />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}
