import React from "react";
import "./popup.css";
import { RiCloseCircleLine } from "@react-icons/all-files/ri/RiCloseCircleLine";

function Popup(props) {
  return props.trigger ? (
    <>
      <div className="popup" onClick={() => props.setTrigger(false)}>
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            <RiCloseCircleLine className="x-btn" />
          </button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default Popup;
