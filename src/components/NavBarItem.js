import React from "react";
import { Dropdown } from "./Dropdown";

export const NavBarItem = ({ items }) => {
  return (
    <li>
      {items.submenu ? (
        <>
          <button>{items.title} </button>
          <Dropdown subnavs={items.subnav} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};
