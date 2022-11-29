import React from "react";
import bjb from "../../assets/image/bjb.png";
import elldoda from "../../assets/image/Elldoda.png";
import ghostober from "../../assets/image/Ghostober.png";
import mandiri from "../../assets/image/mandiri.png";
import moladin from "../../assets/image/Moladin.png";
import "./page2.css";

const Page2 = () => {
  return (
    <div className="img-wrapper">
      <div className="box">
        <img src={bjb} alt="bjb" />
      </div>
      <div className="box">
        <img src={elldoda} alt="elldoda" />
      </div>
      <div className="box">
        <img src={ghostober} alt="ghostober" />
      </div>
      <div className="box">
        <img src={mandiri} alt="mandiri" />
      </div>
      <div className="box">
        <img src={moladin} alt="moladin" />
      </div>
    </div>
  );
};

export default Page2;
