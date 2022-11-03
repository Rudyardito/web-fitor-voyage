import React from "react";
import "./fixed-contact.css";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiYoutube } from "@react-icons/all-files/si/SiYoutube";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";
import { useState } from "react";

function FixedContact() {
  const [slideIn, setSlideIn] = useState(false);
  const moveIn = () => {
    if (window.scrollY >= 75) {
      setSlideIn(true);
    } else {
      setSlideIn(false);
    }
  };

  window.addEventListener("scroll", moveIn);

  return (
    <>
      <div
        className={slideIn ? "contact-fixed contact-slidein" : "contact-fixed"}
      >
        <ul>
          <li>
            <a href="https://www.instagram.com/fitorvoyage.id/" target="_blank">
              <SiInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC_iy91eFlCMrx4ZeV1VEGBw"
              target="_blank"
            >
              <SiYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <SiTiktok />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FixedContact;
