import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  //   document
  //     .querySelector("body")
  //     .addEventListener("wheel", preventScroll, { passive: false });

  //   function preventScroll(e) {
  //     e.preventDefault();
  //     e.stopPropagation();

  //     return false;
  //   }

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#Works">Works</a>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
