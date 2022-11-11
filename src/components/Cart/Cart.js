import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div>
          <img
            className="img-fluid rounded-circle cart-image"
            src="https://i.ibb.co/wrFdtFB/Logo.png"
            alt=""
          />
        </div>
        <div>
          <h5>Mizba Uddin Tareq</h5>
          <p className="fw-bold">Cox's Bazar</p>
        </div>
      </div>
      <div className="d-flex justify-content-between text-center my-5 bg-white p-2">
        <div>
          <h4>63 Kg</h4>
          <p>Weight</p>
        </div>
        <div>
          <h4>6.5 F</h4>
          <p>Height</p>
        </div>
        <div>
          <h4>29 Yrs</h4>
          <p>Age</p>
        </div>
      </div>

      <div>
        <h3>Add a break</h3>
        <div className="bg-white d-flex justify-content-between px-2 py-4">
          <span className="cart-time rounded-circle fw-bold">20m</span>
          <span className="cart-time rounded-circle fw-bold">20m</span>
          <span className="cart-time rounded-circle fw-bold">20m</span>
          <span className="cart-time rounded-circle fw-bold">20m</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
