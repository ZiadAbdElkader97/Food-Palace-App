/* eslint-disable react/prop-types */
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="explore-h1">Explore our menu</h1>
      <p className="explore-p">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
              />
              <p className="item-p">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
