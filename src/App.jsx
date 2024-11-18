import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Login from "./Components/Login/Login.jsx";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
      {/* Scroll To Top Button */}
      <ScrollToTop
        smooth
        color="white"
        width="20px"
        style={{ backgroundColor: "#e74c3c", width: "35px", height: "35px" }}
      />
    </>
  );
}
