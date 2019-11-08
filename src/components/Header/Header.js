import React from "react";

import "./Header.css";

import facebookImage from "../../assets/facebook-components-shape@2x.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={facebookImage}></img>
        <div>
          <span>My profile</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
