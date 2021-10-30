import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import Header from "../Header/Header";
import MiddleSection from "../MiddleSection/MiddleSection";
import Offers from "../Offers/Offers";
import WhySection from "../WhySection/WhySection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      {/* offer section */}
      <p className="pre-title text-center mt-5">Choose Your Trip</p>
      <Offers></Offers>
      <div className="mt-5 py-5">
        <MiddleSection></MiddleSection>
      </div>
      {/* why */}
      <div className="pb-5">
        <p className="pre-title text-center mt-5">Why Tourasso</p>
        <h1 className="text-center">Why you should travel with Tourasso</h1>
        <WhySection></WhySection>
      </div>
      {/* why end */}
    </div>
  );
};

export default Home;
