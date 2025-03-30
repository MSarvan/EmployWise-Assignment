import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/User.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleUserData, setSingleUserData] = useState([]);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => {
          let data = res?.data?.data;
          // console.log(data, "single user data");
          setSingleUserData(data);
          setEditedFirstName(data?.first_name || "");
          setEditedLastName(data?.last_name || "");
          setEditedEmail(data?.email || "");
        })
        .catch((err) => {
          console.log(err, "Error in fetching single user details.");
        });
    }
  }, [id]);

  const isEdited =
    editedFirstName !== singleUserData?.first_name ||
    editedLastName !== singleUserData?.last_name ||
    editedEmail !== singleUserData?.email;

  const handleUpdateUser = (e) => {
    e.preventDefault();

    console.log(isEdited, 'isEdited');

    if (!isEdited) return;

    axios
      .put(`https://reqres.in/api/users/${id}`, {
        first_name: editedFirstName,
        last_name: editedLastName,
        email: editedEmail,
      })
      .then((res) => {
        if (res.status == 200) {
          // console.log("Updated details:", res?.data);
          navigate("/home");
          toast.success("User details updated successfully!");
        }
      })
      .catch((err) => {
        console.error("Error updating user details:", err);
        toast.error("Error updating user details.");
      });
  };

  return (
    <div className="userpage">
      <Navbar />
      <div className="user-container">
        <h2>Edit User's Data</h2>
        <form onSubmit={handleUpdateUser}>
          <div>
            <label htmlFor="First Name">First Name</label>
            <input
              type="text"
              onChange={(e) => {
                setEditedFirstName(e.target.value);
              }}
              value={editedFirstName}
            />
          </div>
          <div>
            <label htmlFor="Last Name">Last Name</label>
            <input
              type="text"
              onChange={(e) => {
                setEditedLastName(e.target.value);
              }}
              value={editedLastName}
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEditedEmail(e.target.value);
              }}
              value={editedEmail}
            />
          </div>
          <div className="user-buttons">
            <button className="update-button" onClick={() => navigate("/home")}>
              Back to Home
            </button>
            <button
              className="update-button"
              style={{
                opacity: isEdited ? 1 : 0.5,
                cursor: isEdited ? "pointer" : "not-allowed",
              }}
              disabled={!isEdited}
              type="submit"
            >
              Update details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
