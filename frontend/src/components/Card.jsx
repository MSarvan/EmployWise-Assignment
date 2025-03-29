import React from "react";
import "../styles/Card.scss";
import avatar1 from "../assets/avatar1.png"

const Card = () => {
  return (
    <div className="card">
      <div className="user-avatar">
        <img src={avatar1} alt="avatar1" />
      </div>
      <div className="user-name">
        <div>John</div>
        <div>Doe</div>
      </div>
      <div className="options">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;
