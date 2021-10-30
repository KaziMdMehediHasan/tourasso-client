import React from "react";
import { Link } from "react-router-dom";

const SingleOffer = (props) => {
  const { _id, location, img_url, duration, price } = props.offer;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img_url} className="card-img-top" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <p className="card-text">{duration}</p>
          <p className="fw-bold">${price}/Per Person</p>
          <Link to={`/offer/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
