import React from "react";
import Navbar from "../components/Navbar";
import "../styles/User.scss";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  return (
    <div className="userpage">
      <Navbar />
      <div className="user-container">
        <h2>Edit User's Data</h2>
        <form action="">
          <div>
            <label htmlFor="First Name">First Name</label>
            <input
              type="text"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              // value={password}
            />
          </div>
          <div>
            <label htmlFor="Last Name">Last Name</label>
            <input
              type="text"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              // value={password}
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              // value={password}
            />
          </div>
          <div className="user-buttons">
            <button className="update-button">Update details</button>
            <button className="update-button" onClick={() => navigate("/home")}>
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
