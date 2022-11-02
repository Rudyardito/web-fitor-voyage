import "./porto.css";
import Popup from "./popup/Popup";
import Carousel from "react-bootstrap/Carousel";
import bjb from "../../assets/image/bjb.png";
import eldoda from "../../assets/image/Elldoda.png";
import moladin from "../../assets/image/Moladin.png";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BsArrowBarRight } from "@react-icons/all-files/bs/BsArrowBarRight";
import Play from "./play-btn/Play";

function Porto() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [bjbPopup, setBjbPopup] = useState(false);
  const [eldodaPopup, setEldodaPopup] = useState(false);
  const [moladinPopup, setMoladinPopup] = useState(false);

  const array_source = [
    {
      img: bjb,
      url: "https://www.youtube.com/watch?v=86M4_QxkgvA",
      trigger: bjbPopup,
      setTrigger: setBjbPopup,
    },
    {
      img: eldoda,
      url: "https://www.youtube.com/watch?v=vySRj0EL2ss",
      trigger: eldodaPopup,
      setTrigger: setEldodaPopup,
    },
    {
      img: moladin,
      url: "https://www.youtube.com/watch?v=eGdnGiMnAa4",
      trigger: moladinPopup,
      setTrigger: setMoladinPopup,
    },
  ];

  const carousel_data = [];
  const popup_trigger_data = [];

  for (const source of array_source) {
    carousel_data.push(
      <button className="batox" onClick={() => source["setTrigger"](true)}>
        <img src={source["img"]} />
        <div className="bg-play">
          <div className="play-btn">
            <Play />
          </div>
        </div>
      </button>
    );
  }

  for (const source of array_source) {
    popup_trigger_data.push(
      <Popup trigger={source["trigger"]} setTrigger={source["setTrigger"]}>
        <ReactPlayer
          className="react-player-pop"
          url={source["url"]}
          playing={true}
          loop={true}
          controls={true}
          height="90vh"
          width="82%"
        />
      </Popup>
    );
  }

  return (
    <>
      <div id="Works">
        <div className="judul-porto">
          <h1>OUR WORKS</h1>
          <h2>CLIENTS THAT TRUSTED US</h2>
        </div>
        <div className="slideshow">
          <Carousel
            className="w-100 indect"
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                {carousel_data}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="sfm">
          <button className="button">
            <a href="#">
              SEE FOR MORE <BsArrowBarRight />
            </a>
          </button>
        </div>
      </div>
      {popup_trigger_data}
    </>
  );
}

export default Porto;
