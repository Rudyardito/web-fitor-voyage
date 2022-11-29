import React from "react";
import Navbar from "../navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import Porto from "../porto/Porto";
import Footer from "../footer/Footer";
import FixedContact from "../fixed-contact/FixedContact";
import About from "../about/About";
import Carousel from "../porto/carousel/Carousel";

function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Porto />
      <About />
      <Footer />
      <FixedContact />
      <div>
        <div className="p-10">
          <div className="flex justify-center items-center gap-2 ">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
