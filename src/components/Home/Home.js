import React from "react";
import Header from "../Header/Header";
import Offers from "../Offers/Offers";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>This is homepage</h1>
      {/* offer section */}
      <Offers></Offers>
    </div>
  );
};

export default Home;
