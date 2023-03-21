// import logo from "./logo.svg";
import "./App.css";

import "./fonts/CenturyGothic.ttf";
import "./fonts/CenturyGothicBold.ttf";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { ArtworkCard } from "./components/ArtworkCard";
import { Home } from "./components/Home";
import { SplashPage } from "./components/SplashPage";

function App() {
  const [isClicked, setIsClicked] = useState("false");
  const toggleIsClicked = () => {
    setIsClicked(!isClicked);
    console.log(">>>>>", isClicked);
  };
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <button className="button-container" onClick={toggleIsClicked}>
            <p className={isClicked ? "header-text" : "header-text-clicked"}>
              JOSEPH STALNAKER
            </p>
          </button> */}
          {/* <ArtworkCard /> */}
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/home" element={<Home />} />

            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
