import "./AppDownload.css";
import { assets } from "../../assets/assets";

export default function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>For Better Experince Download <br /> FoodPalace App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  );
}
