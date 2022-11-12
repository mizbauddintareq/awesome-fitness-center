import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./Activity.css";
const Activity = ({ data, handleAddToCart, cartData }) => {
  const { id, desc, img, name, duration } = data;
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
          <p>{desc}</p>
          <p className="card-text fw-bold">Duration: {duration} Second</p>
        </div>
        <button
          onClick={() => handleAddToCart(info)}
          className="card-btn fw-bold"
        >
          Add Activity <ShoppingCartIcon className="card-icon" />
        </button>
      </div>
    </div>
  );
};

export default Activity;
