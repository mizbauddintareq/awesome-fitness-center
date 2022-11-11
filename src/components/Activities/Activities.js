import React from "react";
import Cart from "../Cart/Cart";

const Activities = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 my-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <h1>Hello</h1>
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
