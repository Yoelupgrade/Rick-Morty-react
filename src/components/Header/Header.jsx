import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <figcaption className="contain">
      <div className="title">
      </div>
      <nav>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/characters">
          Characters
        </NavLink>
        <NavLink className="link" to="/location">
          Locations
        </NavLink>
        <NavLink className="link" to="/searcher">
          <img className="imgS" src="./Image/search.png" alt="Searcher"/>
        </NavLink>
      </nav>
    </figcaption>
  );
};
