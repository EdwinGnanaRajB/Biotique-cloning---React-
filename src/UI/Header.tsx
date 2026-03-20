import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../Styles/Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        Free Shipping on Orders Above ₹499
      </div>

      {/* Main Header */}
      <div className="main-header">
        <img src={logo} alt="Logo" className="logo" />

        <div className="search-box">
          <input placeholder="Search for all products" />
          <button className="search-btn">Search</button>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-bar">
        <NavLink to="/collections">COLLECTIONS</NavLink>
        <NavLink to="/skin">SKIN</NavLink>
        <NavLink to="/hair">HAIR</NavLink>
        <NavLink to="/body">BODY</NavLink>
        <NavLink to="/baby">BABY</NavLink>
        <NavLink to="/men">MEN</NavLink>
        <NavLink to="/fragrance">FRAGRANCE</NavLink>
        <NavLink to="/makeup">NATURAL MAKEUP</NavLink>
        <NavLink to="/gifts">GIFT PACKS</NavLink>
        <NavLink to="/offers">OFFERS</NavLink>
        <NavLink to="/our-story">OUR STORY</NavLink>
      </div>
    </>
  );
}

export default Header;