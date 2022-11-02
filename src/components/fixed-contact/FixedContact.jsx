import React from "react";
import "./fixed-contact.css";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { FiYoutube } from "@react-icons/all-files/fi/FiYoutube";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";

function FixedContact() {
  return (
    <>
      <div className="contact-fixed">
        <ul>
          <li>
            <a href="#">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FiYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FixedContact;
