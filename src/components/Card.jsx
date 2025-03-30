import React from "react";
import "../styles/Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data, setDelClicked, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="user-avatar">
        <img src={data?.avatar} alt="avatar1" />
      </div>
      <div className="wrapper">
        <div className="user-name">
          <div>{data?.first_name}</div>
          <div>{data?.last_name}</div>
        </div>
        <div className="options">
          <button onClick={() => navigate(`/user/${data?.id}`)}>Edit</button>
          <button
            onClick={() => {
              setSelectedUser(data?.id);
              setDelClicked(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
