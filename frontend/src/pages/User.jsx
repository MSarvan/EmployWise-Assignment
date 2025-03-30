import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/User.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleUserData, setSingleUserData] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => {
          let data = res?.data?.data;
          console.log(data, "single user data");
          setSingleUserData(data);
        })
        .catch((err) => {
          console.log(err, "Error in fetching single user details.");
        });
    }
  }, [id]);

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
              value={singleUserData?.first_name || ""}
            />
          </div>
          <div>
            <label htmlFor="Last Name">Last Name</label>
            <input
              type="text"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              value={singleUserData?.last_name || ""}
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              value={singleUserData?.email || ""}
            />
          </div>
          <div className="user-buttons">
            <button className="update-button" onClick={() => navigate("/home")}>
              Back to Home
            </button>
            <button className="update-button">Update details</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
