import React from "react";
import "../styles/Navbar.scss";
import logo from "../assets/logo.jpg";
import avatar from "../assets/user icon.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="emp-logo">
        <img src={logo} alt="logo" onClick={() => navigate('/home')}/>
      </div>
      <div className="user-info">
        <button className="add-user-button">Add User</button>
        <div className="logged-user-avatar">
          <img src={avatar} alt="logged user avatar" />
        </div>
        <button className="signout-button" onClick={() => navigate('/login')}>Signout</button>
      </div>
    </div>
  );
};

export default Navbar;
