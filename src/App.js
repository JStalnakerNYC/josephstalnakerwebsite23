// import logo from "./logo.svg";
import "./App.css";

import "./fonts/CenturyGothic.ttf";
import "./fonts/CenturyGothicBold.ttf";
import { useState } from "react";
import { NavigationButton } from "./components/NavigationButton";
import { ArtworkCard } from "./components/ArtworkCard";

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
        {/* <button
          className={
            isClicked
              ? "header-text-container"
              : "header-text-container-clicked"
          }
          onClick={toggleIsClicked}
        >
          <p className={isClicked ? "header-text" : "header-text-clicked"}>
            JOSEPH STALNAKER
          </p>
        </button> */}
        <ArtworkCard />
      </header>
    </div>
  );
}

export default App;
