import React, { useEffect, useState } from "react";
import SingleOffer from "../SingleOffer/SingleOffer";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://fast-meadow-84110.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOffers(data);
      });
  }, []);
  return (
    <div>
      <h1>Total offers : {offers.length}</h1>
      <div className="container my-5">
        <div class="row">
          {offers.map((offer, index) => (
            <SingleOffer key={offer._id} offer={offer}></SingleOffer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
