import React from "react";
import "./Activity.css";
const Activity = () => {
  return (
    <div class="col">
      <div class="card h-100 p-2 border-0  activity-card">
        <img
          src="https://i.ibb.co/T1pty81/strength-training.jpg"
          class="card-img-top card-image"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Strength Workout</h5>
          <p class="card-text fw-bold">Duration: 2 Minutes</p>
        </div>
        <button className="btn card-btn fw-bold">Add To Cart</button>
      </div>
    </div>
  );
};

export default Activity;
