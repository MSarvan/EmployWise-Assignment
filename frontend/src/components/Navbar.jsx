import React from "react";
import "../styles/Navbar.scss";
import logo from "../assets/logo.jpg";
import avatar from "../assets/user icon.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="emp-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="user-info">
        <div className="logged-user-avatar">
          <img src={avatar} alt="logged user avatar" />
        </div>
        <div className="small-text">Signout</div>
      </div>
    </div>
  );
};

export default Navbar;
