import React from "react";
import "./BannerSection.css";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";

const BannerSection = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <h1 className="banner-title">Beautiful One Day, Perfect The Next</h1>
      <div className="carousel-inner">
        {/* first item */}

        <div className="carousel-item active" data-bs-interval="3000">
          <div className="caro-img">
            {" "}
            <img src={banner1} className="d-block w-100" alt="carousel" />
          </div>

          <div class="carousel-caption d-none d-md-block">
            <h1>Conquer The Sea</h1>
            <p>Trip to the amazing seas throughout the world</p>
          </div>
        </div>
        {/* 2nd item */}
        <div className="carousel-item" data-bs-interval="3000">
          <div className="caro-img">
            <img src={banner2} className="d-block w-100" alt="carousel" />
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h1>Explore The Mountains</h1>
            <p>Amazing Mountain trip with the best climbers</p>
          </div>
        </div>
        {/* 3rd item */}
        <div className="carousel-item" data-bs-interval="3000">
          <div className="caro-img">
            <img src={banner3} className="d-block w-100" alt="carousel" />
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h1>A Taste of Winter</h1>
            <p>Wanna play with the snow? Book for a Winter trip ASAP!</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BannerSection;
