import React from "react";
import "../App.css";
import { NavigationButton } from "./NavigationButton";

export const ArtworkCard = () => {
  return (
    <div className="artwork-card">
      <div className="image-container">
        <img src={`castings/1.png`} height="500px" />
      </div>
      <div className="row-container">
        <div className="description-container">
          <p className="description-text">Casting I</p>
          <p className="description-text">graphite on board</p>
          <p className="description-text">5.5 X 7in</p>
          <p className="description-text">JS6</p>
        </div>
        <div>
          <NavigationButton />
          <NavigationButton />
        </div>
      </div>
    </div>
  );
};
