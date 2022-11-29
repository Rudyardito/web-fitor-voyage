import React from "react";
import logo from "../../assets/image/logo.png";
import "./navbar.css";
import { useState } from "react";
import yellowVoyage from "../../assets/image/Voyage-yellow.png";
import { Squash as Hamburger } from "hamburger-react";
import Sidebar from "./sidebar/Sidebar.jsx";
import { Link } from "react-router-dom";

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

  const [burger, setBurger] = useState(false);
  const burgerIn = () => {
    if (window.scrollY >= 75) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  };

  window.addEventListener("scroll", burgerIn);

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="voyage">
        <img src={yellowVoyage} alt="Voyage" />
      </div>
      <div className={color ? "header header-bg" : "header"}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className={burger ? "hamburger hamburger-in" : "hamburger"}>
        <Hamburger
          size={48}
          color="#ffde59"
          label="Show Sidebar Menu"
          toggled={isOpen}
          toggle={setOpen}
        />
        {isOpen ? <Sidebar /> : null}
      </div>
    </>
  );
};

export default Navbar;
