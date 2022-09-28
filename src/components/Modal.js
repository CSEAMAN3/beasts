import React from "react";

export default function Modal({ activeBeast, changeModal }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <img className="modal-image" src={activeBeast.image_url} alt="hello" />
        <p className="modal-image-description">{activeBeast.description}</p>
        <button className="modal-btn" onClick={changeModal}>
          X
        </button>
      </div>
    </div>
  );
}
