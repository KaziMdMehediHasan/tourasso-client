import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SingleOffer from "../SingleOffer/SingleOffer";
import "./Offers.css";

const Offers = () => {
  const { user, isLoading } = useAuth();
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://fast-meadow-84110.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOffers(data);
      });
  }, []);

  //spinner
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <h1 className="text-center my-5">Our Most Popular And Best Adventures</h1>
      <div className="offer-parent">
        <div class="offer-container">
          {offers.map((offer, index) => (
            <SingleOffer key={offer._id} offer={offer}></SingleOffer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
