import React from "react";
import "../styles/Modal.scss";

const Modal = ({ setDelClicked, handleDelete, selectedUser }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div>Are you sure, you want to delete the User?</div>
        <div className="yes-no-btn">
          <button onClick={() => handleDelete(selectedUser)}>Yes</button>
          <button onClick={() => setDelClicked(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
