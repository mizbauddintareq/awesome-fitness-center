import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Cart from "../Cart/Cart";
const Activities = () => {
  const [activities, setActivities] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (info) => {
    const newData = [...cart, info];

    setCart(newData);
  };

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-between">
        <div className="col-md-8 my-5 sticky-top">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {activities.map((activity) => (
              <Activity
                data={activity}
                key={activity.id}
                handleAddToCart={handleAddToCart}
                cartData={cart}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3 cart-section sticky-top">
          <Cart cartData={cart} activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default Activities;
