import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="#" className="navbar__logo" />
      <ul className="navbar__links">
        <li className="navbar__link--active">Home</li>
        <li className="navbar__link">Gallery</li>
        <li className="navbar__link">Lost Visions Performance</li>
        <li className="navbar__link">About</li>
        <li className="navbar__link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
