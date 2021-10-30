import React from "react";
import banner6 from "../../images/banner6.jpg";
import "./MiddleSection.css";

const MiddleSection = () => {
  return (
    <div className="middle-parent bg-dark">
      <div className="half">
        <h2>
          <i>Adventure</i>
        </h2>
        <h1 className="fw-bold">Dare To Explore</h1>
        <p>
          Exploring means learning. Bring new experiences from each journey.
          Meet different cultures, traditions and landscapes. Choose your next
          destination and start your trip.
        </p>
      </div>
      <div className="half">
        <img src={banner6} alt="middle" />
      </div>
    </div>
  );
};

export default MiddleSection;
