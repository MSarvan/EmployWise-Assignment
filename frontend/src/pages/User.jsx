import React from "react";
import Navbar from "../components/Navbar";
import "../styles/User.scss";

const User = () => {
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
          <button className="update-button">Update details</button>
        </form>
      </div>
    </div>
  );
};

export default User;
