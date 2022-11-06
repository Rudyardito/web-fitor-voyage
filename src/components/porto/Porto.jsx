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
  const [fadeIn, setFadeIn] = useState(false);
  const zoomIn = () => {
    if (window.scrollY >= 500) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };
  window.addEventListener("scroll", zoomIn);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [bjbPopup, setBjbPopup] = useState(false);
  const [eldodaPopup, setEldodaPopup] = useState(false);
  const [moladinPopup, setMoladinPopup] = useState(false);
  const [satuPopup, setSatuPopup] = useState(false);
  const [duaPopup, setDuaPopup] = useState(false);
  const [tigaPopup, setTigaPopup] = useState(false);
  const [firstPopup, setFirstPopup] = useState(false);
  const [secondPopup, setSecondPopup] = useState(false);
  const [thirdPopup, setThirdPopup] = useState(false);
  const array_source = [
    {
      img: bjb,
      url: "https://www.youtube.com/embed/86M4_QxkgvA",
      trigger: bjbPopup,
      setTrigger: setBjbPopup,
    },
    {
      img: eldoda,
      url: "https://www.youtube.com/embed/vySRj0EL2ss",
      trigger: eldodaPopup,
      setTrigger: setEldodaPopup,
    },
    {
      img: moladin,
      url: "https://www.youtube.com/embed/eGdnGiMnAa4",
      trigger: moladinPopup,
      setTrigger: setMoladinPopup,
    },
  ];
  const array_source1 = [
    {
      img: eldoda,
      url: "https://www.youtube.com/embed/vySRj0EL2ss",
      trigger: satuPopup,
      setTrigger: setSatuPopup,
    },
    {
      img: eldoda,
      url: "https://www.youtube.com/embed/vySRj0EL2ss",
      trigger: duaPopup,
      setTrigger: setDuaPopup,
    },
    {
      img: eldoda,
      url: "https://www.youtube.com/embed/vySRj0EL2ss",
      trigger: tigaPopup,
      setTrigger: setTigaPopup,
    },
  ];
  const array_sourceSecond = [
    {
      img: moladin,
      url: "https://www.youtube.com/embed/vySRj0EL2ss",
      trigger: firstPopup,
      setTrigger: setFirstPopup,
    },
    {
      img: moladin,
      url: "https://www.youtube.com/embed/vySRj0EL2ss",
      trigger: secondPopup,
      setTrigger: setSecondPopup,
    },
    {
      img: moladin,
      url: "https://www.youtube.com/embed/vySRj0EL2ss",
      trigger: thirdPopup,
      setTrigger: setThirdPopup,
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
  const carousel1_data = [];
  const popup1_trigger_data = [];
  for (const source1 of array_source1) {
    carousel1_data.push(
      <button className="batox" onClick={() => source1["setTrigger"](true)}>
        <img src={source1["img"]} />
        <div className="bg-play">
          <div className="play-btn">
            <Play />
          </div>
        </div>
      </button>
    );
  }
  for (const source1 of array_source1) {
    popup1_trigger_data.push(
      <Popup trigger={source1["trigger"]} setTrigger={source1["setTrigger"]}>
        <ReactPlayer
          className="react-player-pop"
          url={source1["url"]}
          playing={true}
          loop={true}
          controls={true}
          height="90vh"
          width="82%"
        />
      </Popup>
    );
  }
  const carouselSecond_data = [];
  const popupSecond_trigger_data = [];
  for (const sourceSecond of array_sourceSecond) {
    carouselSecond_data.push(
      <button
        className="batox"
        onClick={() => sourceSecond["setTrigger"](true)}
      >
        <img src={sourceSecond["img"]} />
        <div className="bg-play">
          <div className="play-btn">
            <Play />
          </div>
        </div>
      </button>
    );
  }
  for (const sourceSecond of array_sourceSecond) {
    popupSecond_trigger_data.push(
      <Popup
        trigger={sourceSecond["trigger"]}
        setTrigger={sourceSecond["setTrigger"]}
      >
        <ReactPlayer
          className="react-player-pop"
          url={sourceSecond["url"]}
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
        <div
          className={fadeIn ? "judul-porto judul-porto-fadein" : "judul-porto"}
        >
          <h1>OUR WORKS</h1>
          <h2>TRUSTED BY</h2>
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
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                {carousel1_data}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                {carouselSecond_data}
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
      {popup1_trigger_data}
      {popupSecond_trigger_data}
    </>
  );
}

export default Porto;
