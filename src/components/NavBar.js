import React, { useState } from "react";
import "../App.css";
import { navItems } from "../navItems";
import { NavBarItem } from "./NavBarItem";

export const NavBar = (props) => {
  const [isClicked, setIsClicked] = useState("false");
  const toggleIsClicked = () => {
    setIsClicked(!isClicked);
    console.log(">>>>>", isClicked);
  };
  return (
    <nav>
      {isClicked ? (
        <ul className="nav-dropdown-closed">
          <li onClick={toggleIsClicked}>Artwork</li>
          <li>Biography</li>
          <li>Contact</li>
        </ul>
      ) : (
        <ul className="nav-dropdown-open">
          <li onClick={toggleIsClicked}>Artwork</li>
          <ul className="nav-dropdown-open-sub-menu">
            <li className="item-1">Guys & Dolls</li>
            <li className="item-2">Castings</li>
            <li className="item-3">Nightscapes</li>
            <li className="item-4">Nudes</li>
            <li className="item-5">The Beautiful Game</li>
          </ul>
          <li>Biography</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};
