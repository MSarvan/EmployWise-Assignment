import React, { useContext } from "react";
import "../styles/Navbar.scss";
import logo from "../assets/logo.jpg";
import avatar from "../assets/user icon.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(GlobalContext);

  const logoutWithNavigate = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="emp-logo">
        <img src={logo} alt="logo" onClick={() => navigate("/home")} />
      </div>
      <div className="user-info">
        <div className="logged-user-avatar">
          <img src={avatar} alt="logged user avatar" />
        </div>
        <button className="signout-button" onClick={logoutWithNavigate}>
          Signout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
