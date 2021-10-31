import React from "react";
import "./SingleMyTrip.css";

const SingleMyTrip = (props) => {
  const { img_url, location, duration, price } = props.trip.booking;

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://fast-meadow-84110.herokuapp.com/trips/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    alert("Trip Cancelled");
  };
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div className="card-div card" style={{ width: "18rem" }}>
        <img src={img_url} className="card-img-top" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <p className="card-text">{duration}</p>
          <p className="fw-bold">${price}/Per Person</p>
          <button
            onClick={() => {
              if (window.confirm("Are you sure to delete?")) {
                handleDelete(props.trip._id);
              }
            }}
            className="btn btn-danger text-white"
          >
            Cancel Trip
          </button>
        </div>
        <div className="status">
          <p>
            <b>{props.trip.status}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMyTrip;
