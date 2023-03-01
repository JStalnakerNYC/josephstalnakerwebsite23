import logo from "./logo.svg";
import "./App.css";

import "./fonts/CenturyGothic.ttf";
import "./fonts/CenturyGothicBold.ttf";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { caretForwardOutline } from "ionicons/icons";

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
        <button
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
        </button>
        <button
          className={
            isClicked
              ? "header-text-container"
              : "header-text-container-clicked"
          }
          onClick={toggleIsClicked}
        >
          <ion-icon icon={caretForwardOutline} size="medium" />
        </button>
      </header>
    </div>
  );
}

export default App;
