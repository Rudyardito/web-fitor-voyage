import React from "react";
import ReactPlayer from "react-player";
import Fitor from "../../assets/image/logo.png";
import "./about.css";
import Behind from "../../assets/image/contohbehindthescene.png";
import { useState } from "react";

function About() {
  const [turnIn, setTurnIn] = useState(false);
  const cornerIn = () => {
    if (window.scrollY >= 1500) {
      setTurnIn(true);
    } else {
      setTurnIn(false);
    }
  };

  const [blackIn, setBlackIn] = useState(false);
  const whiteIn = () => {
    if (window.scrollY >= 1500) {
      setBlackIn(true);
    } else {
      setBlackIn(false);
    }
  };

  window.addEventListener("scroll", cornerIn);
  window.addEventListener("scroll", whiteIn);

  return (
    <>
      <div id="About">
        <div className={turnIn ? "about-judul about-judul-in" : "about-judul"}>
          <h1>ABOUT US</h1>
        </div>

        <div
          className={
            blackIn ? "about-logo-text about-logo-text-in" : "about-logo-text"
          }
        >
          <div className="about-logo">
            <img src={Fitor} alt="About Fitor" />
          </div>
          <div className="about-text">
            <h2>Fitor Foyage</h2>
            <br />
            <br />
            <p>
              A creative production team that mainly works in the fields of
              videography and photography located in Bandung, West Java.
              <br />
              <br />
              We believe in terms of creative project, a proper communication is
              a necessity to gain mutual understanding in order to achieve a
              perfect impectful results.
              <br />
              <br />
              <br />
              <br />
              <span>
                I Nyoman Nuarta once said
                <br />
                <br />
                <i className="nyoman">"Art is an act of freewill"</i>
                <br />
                Therefore we see no limitations
              </span>
            </p>
          </div>
        </div>
        <div className="about-vids">
          <ReactPlayer
            className="react-player-about"
            url={
              "https://www.youtube.com/watch?v=utbIGXsoRM0rel=0&iv_load_policy=3&disablekb=1"
            }
            muted={true}
            // autoPlay={true}
            playing={true}
            loop={true}
            controls={false}
            height="70vh"
            width="85%"
          />
          <div className="tutup"></div>
        </div>
      </div>
    </>
  );
}

export default About;
