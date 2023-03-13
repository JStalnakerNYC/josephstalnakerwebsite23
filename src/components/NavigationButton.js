import React, { useState } from "react";
import "../App.css";

export const NavigationButton = () => {
  const [isClicked, setIsClicked] = useState("false");
  const toggleIsClicked = () => {
    setIsClicked(!isClicked);
    console.log(">>>>>", isClicked);
  };
  return (
    <button
      className={isClicked ? "button-container" : "button-container-clicked"}
      onClick={toggleIsClicked}
    >
      <div className="svg-container">
        <svg
          width="24"
          height="19"
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="caret-icon"
        >
          <path
            d="M0.25 0.768797L23.2944 9.5L0.249999 18.2312L0.25 0.768797Z"
            stroke="#535353"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            className="caret-icon"
          />
          {/* <path
            d="M24 9.5L-8.56449e-07 18.5933L-6.14903e-08 0.406732L24 9.5Z"
            fill="#343434"
          /> */}
        </svg>
      </div>
    </button>
  );
};
