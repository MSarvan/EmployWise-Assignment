import React from "react";
import "../styles/Modal.scss";

const Modal = ({ setDelClicked }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div>Are you sure, you want to delete the User?</div>
        <div className="yes-no-btn">
          <button>Yes</button>
          <button onClick={() => setDelClicked(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
