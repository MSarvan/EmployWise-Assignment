import React from "react";
import "../styles/Card.scss";
import avatar1 from "../assets/avatar1.png";
import { useNavigate } from "react-router-dom";

const Card = ({ data, setDelClicked }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="user-avatar">
        <img src={avatar1} alt="avatar1" />
      </div>
      <div className="user-name">
        <div>{data.firstName}</div>
        <div>{data.LastName}</div>
      </div>
      <div className="options">
        <button onClick={() => navigate(`/user/${data.id}`)}>Edit</button>
        <button onClick={() => setDelClicked(true)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
