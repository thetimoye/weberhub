import React from "react";
import PropTypes from "prop-types";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="logo-box">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
