// import logo from "./logo.svg";
import "./App.css";

import "./fonts/CenturyGothic.ttf";
import "./fonts/CenturyGothicBold.ttf";
import React, { useState } from "react";
import { ArtworkCard } from "./components/ArtworkCard";
import { NavBar } from "./components/NavBar";
import { Dropdown } from "./components/Dropdown";

function App() {
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
          <p className={isClicked ? "header-text" : "header-text-clicked"}>
            JOSEPH STALNAKER
          </p>
        </button>
        {/* <ArtworkCard /> */}
        <NavBar />
      </header>
    </div>
  );
}

export default App;
