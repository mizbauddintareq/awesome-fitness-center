import React, { useEffect, useState } from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
const Cart = ({ cartData, activities }) => {
  const [breakTime, setBreakTime] = useState(0);
  const notify = () => toast("You've completed today's activities");

  const totalTime = cartData.reduce((c, p) => c + p.duration, 0);

  const handleBreakTime = (breakDuration) => {
    localStorage.setItem("break-time", JSON.stringify(breakDuration));
    setBreakTime(breakDuration);
  };

  useEffect(() => {
    const getTimeFromLs = JSON.parse(localStorage.getItem("break-time"));
    setBreakTime(getTimeFromLs);
  }, [breakTime]);

  return (
    <div>
      <div className="py-4">
        <div className="d-flex align-items-center">
          <div>
            <img
              className="img-fluid rounded-circle cart-image"
              src="https://i.ibb.co/Dwm2hVy/123140251-1218544191844233-2593076809611943339-n.jpg"
              alt=""
            />
          </div>
          <div className="ms-3">
            <h5>Mizba Uddin Tareq</h5>
            <MapPinIcon className="map-icon" />{" "}
            <span className="fw-bold">Cox's Bazar</span>
          </div>
        </div>
        <div className="d-flex justify-content-between text-center my-4">
          <div className="small-box bg-white">
            <h4>63 Kg</h4>
            <p>Weight</p>
          </div>
          <div className="small-box bg-white">
            <h4>5.9 F</h4>
            <p>Height</p>
          </div>
          <div className="small-box bg-white">
            <h4>29 Yrs</h4>
            <p>Age</p>
          </div>
        </div>

        <div className="mb-5">
          <h5>Add a break</h5>
          <div className="bg-white d-flex justify-content-between small-box">
            {activities.slice(0, 5).map((data) => (
              <span
                onClick={() => handleBreakTime(data?.breakTime)}
                key={data.id}
                className="cart-time rounded-circle fw-bold"
              >
                {data?.breakTime}s
              </span>
            ))}
          </div>
        </div>
        <div>
          <h5>Exercise Details</h5>
          <div className="bg-white small-box">
            <h5>
              <span className="fw-bold">Exercise time:</span> {totalTime}{" "}
              Seconds
            </h5>
          </div>
          <div className="bg-white my-4 small-box">
            <h5>
              <span className="fw-bold">Break time:</span> {breakTime} Seconds
            </h5>
          </div>
          <div className="text-center">
            <div>
              <button
                style={{ backgroundColor: "cornflowerblue" }}
                className="btn px-5 fw-bold text-white"
                onClick={notify}
              >
                Activity Completed <PaperAirplaneIcon className="cart-icon" />
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
