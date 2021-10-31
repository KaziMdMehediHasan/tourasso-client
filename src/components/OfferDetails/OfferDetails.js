import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./OfferDetails.css";

const OfferDetails = () => {
  const { user } = useAuth();
  const preloadedValues = {
    name: user.displayName,
    userMail: user.email,
  };
  const { register, handleSubmit } = useForm({
    defaultValues: preloadedValues,
  });

  const [offer, setOffer] = useState({});
  const { id } = useParams();
  const { location, duration, description, img_url, price } = offer;

  const onSubmit = (data, e) => {
    data.booking = offer;
    data.email = user.email;
    data.status = "pending";
    console.log(data);

    fetch("https://fast-meadow-84110.herokuapp.com/trips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Trip Booked Successfully!");
    e.target.reset();
  };

  //   getting the data from the database

  useEffect(() => {
    fetch(`https://fast-meadow-84110.herokuapp.com/offers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOffer(data);
      });
  }, []);

  //   send request to the server

  return (
    <div className="p-5">
      <div className="booking-parent-container">
        <div className="customer-detail-form shadow-lg">
          <h1>Book Your Trip</h1>
          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              placeholder="name *required"
            />
            <hr />
            <input
              {...register("userMail", { required: true })}
              placeholder="userMail*required"
            />
            <hr />
            <input type="date" {...register("tour_date")} />
            <hr />
            <input
              type="number"
              {...register("contact", { required: true })}
              placeholder="Your Contact Number *required"
            />
            <hr />
            <input type="submit" />
          </form>
        </div>
        <div className="offer-detail">
          <div class="col-lg-4 col-md-6 col-sm-12 shadow-lg">
            <div className="card" style={{ width: "23rem" }}>
              <img src={img_url} className="card-img-top" alt="card-img" />
              <div className="card-body">
                <h5 className="card-title">{location}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{duration}</p>
                <p className="fw-bold">${price}/Per Person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
