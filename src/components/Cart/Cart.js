import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="py-4">
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
      <div className="d-flex justify-content-between text-center my-4 bg-white p-2">
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

      <div className="my-4">
        <h3>Add a break</h3>
        <div className="bg-white d-flex justify-content-between px-2 py-4">
          <span className="cart-time rounded-circle fw-bold">20m</span>
          <span className="cart-time rounded-circle fw-bold">20m</span>
          <span className="cart-time rounded-circle fw-bold">20m</span>
          <span className="cart-time rounded-circle fw-bold">20m</span>
        </div>
      </div>
      <div>
        <h3>Exercise Details</h3>
        <div className="bg-white py-4 my-4 px-2">
          <h5>
            <span className="fw-bold">Exercise time:</span> 200 second
          </h5>
        </div>
        <div className="bg-white py-4 my-4 px-2">
          <h5>
            <span className="fw-bold">Break time:</span> 200 second
          </h5>
        </div>
        <div className="text-center">
          <button className="btn btn-danger px-5 fw-bold">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
