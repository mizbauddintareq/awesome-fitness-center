import React from "react";
import "./Activity.css";
const Activity = ({ data, handleAddToCart }) => {
  const { id, img, name, duration } = data;
  const info = {
    id,
    duration,
  };

  return (
    <div className="col">
      <div className="card h-100 p-2 border-0  activity-card">
        <img src={img} className="card-img-top card-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text fw-bold">Duration: {duration} Minutes</p>
        </div>
        <button
          onClick={() => handleAddToCart(info)}
          className="btn card-btn fw-bold"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Activity;
