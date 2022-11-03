import React from "react";
import "./footer.css";
import foot from "../../assets/image/icon1.png";

function footer() {
  return (
    <>
      <div id="Contact">
        <div className="judul-footer">
          <h2>Lets work together!</h2>
        </div>
        <div className="contact-us">
          <button>
            <a href="https://wa.me/+6285926841538" target="_blank">
              HIT US UP! <img src={foot} alt="icon" />
            </a>
          </button>
        </div>
        <div className="white-line"></div>
        <div className="address">
          <h1>BANDUNG, INDONESIA</h1>
          <p>
            <a href="https://wa.me/+6285926841538" target="_blank">
              +6285926841538
            </a>
            <br />
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQMHTZwMqdNgJktZdQLjgLzNnDMwBJSnnlFlpDNGmpRjZCZnlVdPTsCSWBHWVDDVTsq"
              target="_blank"
            >
              fitor.voyage@gmail.com
            </a>
            <br />
            <br />
            Jl.Cijerokaso, No.16, RT05/RW01,
            <br />
            Bandung, West Java, Indonesia
          </p>
        </div>
        <div className="white-second-line"></div>
        <div className="copyright">
          <p>Copyright © 2022 FITOR VOYAGE All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default footer;
