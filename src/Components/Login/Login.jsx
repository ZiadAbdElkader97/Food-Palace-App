/* eslint-disable react/prop-types */
import { assets } from "../../assets/assets";
import { useState } from "react";
import "./Login.css";

export default function Login({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login">
      <form className="login-popup">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="text-input"
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          <input
            className="text-input"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="text-input"
            type="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button className="login-btn" type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input className="checkbox-input" type="checkbox" required />
          <p className="condition-p">
            By Continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p className="login-p">
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p className="login-p">
            Already have an account?
            <span onClick={() => setCurrState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
