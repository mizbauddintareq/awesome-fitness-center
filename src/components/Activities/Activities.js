import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Cart from "../Cart/Cart";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 my-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {activities.map((activity) => (
              <Activity data={activity} />
            ))}
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
