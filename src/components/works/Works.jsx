import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Page2 from "../page2/Page2";

function Works() {
  return (
    <div>
      <Link to="/">Works</Link>
      <div>
        <Navbar />
        <Page2 />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Works;
