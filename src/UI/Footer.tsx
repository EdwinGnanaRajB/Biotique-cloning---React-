import "../Styles/Footer.css";
import logo from "../assets/Logo.png";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Column 1 */}
        <div className="footer-col">
          <h4>Customer Support</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Track Order</p>
          <p>Return & Exchange</p>
          <p>Shipping Locations</p>
          <p>Return Request</p>
          <p>Shipping Policy</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>About Us</h4>
          <p>Our Story</p>
          <p>Blogs</p>
          <p>Ingredients Index</p>
          <p>Hotel & Spa</p>
          <p>Biotique Professional</p>
          <p>Media</p>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Your Account</h4>
          <p>My Account</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Privacy and Terms</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        {/* Left */}
        <div className="footer-left">
          <img src={logo} alt="Biotique" />
        </div>

        {/* Center */}
        <div className="footer-center">
          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>

          <p>
            Worldwide Copyright © Bio Veda Action Research Co.
            (brand owners of Biotique). All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <span>VISA</span>
          <span>Mastercard</span>
          <span>RuPay</span>
          <span>UPI</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
