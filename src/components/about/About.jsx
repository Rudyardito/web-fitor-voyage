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
    if (window.scrollY >= 2100) {
      setBlackIn(true);
    } else {
      setBlackIn(false);
    }
  };

  const [diveIn, setDiveIn] = useState(false);
  const surfaceIn = () => {
    if (window.scrollY >= 2700) {
      setDiveIn(true);
    } else {
      setDiveIn(false);
    }
  };

  const [quotesIn, setQuotesIn] = useState(false);
  const motivateIn = () => {
    if (window.scrollY >= 3500) {
      setQuotesIn(true);
    } else {
      setQuotesIn(false);
    }
  };

  window.addEventListener("scroll", cornerIn);
  window.addEventListener("scroll", whiteIn);
  window.addEventListener("scroll", surfaceIn);
  window.addEventListener("scroll", motivateIn);

  return (
    <>
      <div id="About">
        <div className={turnIn ? "about-judul about-judul-in" : "about-judul"}>
          <h1>ABOUT US</h1>
        </div>

        <div className={blackIn ? "about-int about-int-in" : "about-int"}>
          <div className="about-int-vids">
            <ReactPlayer
              className="react-player-interview"
              url={"https://www.youtube.com/embed/Tjkhn7q-diQ"}
              muted={true}
              playing={true}
              loop={true}
              controls={false}
              height="60vh"
              width="100%"
            />
            <div className="close"></div>
          </div>
          <div className="about-int-text">
            <h2>Fitor Voyage</h2>
            <br />
            <br />
            <p>
              A creative production team
              <br />
              that mainly works in the fields of
              <br />
              videography and photography
              <br />
              located in Bandung, West Java, Indonesia.
            </p>
          </div>
        </div>
        <div className={diveIn ? "about-bts about-bts-in" : "about-bts"}>
          <div className="about-bts-text">
            <h2>Fitor Voyage</h2>
            <br />
            <br />
            <p>
              We believe in terms of creative project, a proper communication is
              a necessity to gain mutual understanding in order to achieve a
              perfect impectful results.
            </p>
          </div>
          <div className="about-bts-vids">
            <ReactPlayer
              className="react-player-bts"
              url={
                "https://www.youtube.com/watch?v=utbIGXsoRM0rel=0&iv_load_policy=3&disablekb=1"
              }
              muted={true}
              playing={true}
              loop={true}
              controls={false}
              height="50vh"
              width="100%"
            />
            <div className="tutup"></div>
          </div>
        </div>
        <div className={quotesIn ? "quotes quotes-in" : "quotes"}>
          <p>
            I Nyoman Nuarta once said
            <br />
            <br />
            <i className="nyoman">"Art is an act of freewill"</i>
            <br />
            Therefore we see no limitations
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
