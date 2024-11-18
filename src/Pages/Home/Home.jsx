import "./Home.css";
import { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../Components/AppDownload/AppDownload.jsx";

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}
