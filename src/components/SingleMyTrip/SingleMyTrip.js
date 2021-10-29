import React from "react";

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
      <div className="card" style={{ width: "18rem" }}>
        <img src={img_url} className="card-img-top" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <p className="card-text">{duration}</p>
          <p className="fw-bold">${price}/Per Person</p>
          <button
            onClick={() => handleDelete(props.trip._id)}
            className="btn btn-danger text-white"
          >
            Cancel Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMyTrip;
