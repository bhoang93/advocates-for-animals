import React from "react";
import Navigation from "./Navigation";

import logo from "../Images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="heading">
        <img className="heading__logo" src={logo} alt="elk" />
        <h1 className="main-heading">Advocates for Animals</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
