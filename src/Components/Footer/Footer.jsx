import { assets } from "../../assets/assets";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1 className="head-logo">Food Palace.</h1>
          <p className="footer-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            aut praesentium reiciendis obcaecati voluptates excepturi tenetur!
            Ipsa laboriosam et exercitationem provident corrupti soluta! Magni
            deleniti voluptatem dicta in possimus sequi!
          </p>
          <div className="footer-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-center">
          <h2>company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>get in touch</h2>
          <ul>
            <li>+12-123-456-789</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © foodpalace.com - All Right Reserved.
      </p>
    </div>
  );
}
