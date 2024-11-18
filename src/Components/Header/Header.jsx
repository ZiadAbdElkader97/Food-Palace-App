import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="header-h2">Order your favorite food here</h2>
        <p className="header-p">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="header-btn">View Menu</button>
      </div>
    </div>
  );
}
