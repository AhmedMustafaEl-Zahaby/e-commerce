import React, { useState, useContext, useEffect } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <ul className={`nav-menu ${showMenu ? "show" : ""}`}>
        <li
          onClick={() => {
            setMenu("shop");
            if (window.screen.width < 970) {
              toggleMenu();
            }
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Shop
          </Link>{" "}
          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
            if (window.screen.width < 970) {
              toggleMenu();
            }
          }}
        >
          <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
            Men
          </Link>{" "}
          {menu === "men" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
            if (window.screen.width < 970) {
              toggleMenu();
            }
          }}
        >
          <Link to="/women" style={{ textDecoration: "none", color: "black" }}>
            Women
          </Link>{" "}
          {menu === "women" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            if (window.screen.width < 970) {
              toggleMenu();
            }
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "black" }}>
            Kids
          </Link>{" "}
          {menu === "kids" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            if (window.screen.width < 970) {
              toggleMenu();
            }
          }}
        >
          <Link to="login" className="mobile">
            <button>Login</button>
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="login">
          <button className={`screen`}>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <div className="bars-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
      {/* Overlay for responsive design */}
      {showMenu && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}

export default Navbar;
