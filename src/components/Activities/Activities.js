import React from "react";
import Cart from "../Cart/Cart";
import "./Activies.css";
const Activities = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 my-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
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
          </div>
        </div>
        <div className="col-md-3 cart-section">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Activities;
