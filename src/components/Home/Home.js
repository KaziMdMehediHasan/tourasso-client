import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import Header from "../Header/Header";
import Offers from "../Offers/Offers";
import WhySection from "../WhySection/WhySection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      {/* offer section */}
      <p>Choose Your Trip</p>
      <Offers></Offers>
      {/* why */}
      <div>
        <p>Why Tourasso</p>
        <h1 className="text-center my-5">
          Why you should travel with Tourasso
        </h1>
        <WhySection></WhySection>
      </div>
      {/* why end */}
    </div>
  );
};

export default Home;
