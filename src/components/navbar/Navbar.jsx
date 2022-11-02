import React from "react";
import logo from "../../assets/image/logo.png";
import "./navbar.css";
import { useState } from "react";
import yellowVoyage from "../../assets/image/Voyage-yellow.png";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 75) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className="voyage">
        <img src={yellowVoyage} alt="Voyage" />
      </div>
      <nav className={color ? "header header-bg" : "header"}>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="#Works">Works</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
