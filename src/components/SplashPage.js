// import logo from "./logo.svg";
import "../App.css";

import React, { useState } from "react";

export const SplashPage = () => {
  const [isClicked, setIsClicked] = useState("false");
  const toggleIsClicked = () => {
    setIsClicked(!isClicked);
    console.log(">>>>>", isClicked);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button className="button-container" onClick={toggleIsClicked}>
          <a
            className={isClicked ? "header-text" : "header-text-clicked"}
            href={"/home"}
          >
            JOSEPH STALNAKER
          </a>
        </button>
        {/* <ArtworkCard /> */}
        {/* <NavBar /> */}
      </header>
    </div>
  );
};
