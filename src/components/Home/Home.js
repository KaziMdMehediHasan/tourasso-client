import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import Header from "../Header/Header";
import Offers from "../Offers/Offers";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      {/* offer section */}
      <Offers></Offers>
    </div>
  );
};

export default Home;
