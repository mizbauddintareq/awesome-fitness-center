import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";
const Activities = () => {
  const [activities, setActivities] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (info) => {
    const uniqueData = cart.find((cartData) => cartData.id === info.id);
    if (uniqueData) {
      Swal.fire({
        icon: "error",
        title: "Item Already Added",
      });
      return;
    }
    const newData = [...cart, info];
    if (newData.length > 5) {
      Swal.fire({
        icon: "error",
        title: "U can add maximum 5 activities",
      });
      return;
    }
    setCart(newData);
  };
  console.log(cart);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  console.log(cart);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 my-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {activities.map((activity) => (
              <Activity
                data={activity}
                key={activity.id}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3 cart-section">
          <Cart data={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default Activities;
