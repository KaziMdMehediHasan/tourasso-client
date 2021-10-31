import React from "react";
import "./SingleOrder.css";

const SingleOrder = (props) => {
  const { name, contact, email, _id, tour_date, status } = props.order;

  const handleDelete = (id) => {
    console.log(id);
    // sending request to the server to delete orders

    fetch(`https://fast-meadow-84110.herokuapp.com/trips/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    alert("Deleted");
  };

  //update
  const handleApprove = (status, id) => {
    console.log(status, id);
    fetch(`https://fast-meadow-84110.herokuapp.com/trips/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="single-order my-5 shadow rounded-3 p-2">
      <p className="text-center">
        <span>Name :</span> {name}
      </p>
      <p className="text-center">
        <span>Contact :</span> {contact}
      </p>
      <p className="text-center">
        <span>Order Id :</span> {_id}
      </p>
      <p className="text-center">
        <span>Date :</span> {tour_date}
      </p>
      <p className="text-center">
        <span>Email :</span> {email}
      </p>
      <p className="text-center">
        <span>Order Status :</span> {status}
      </p>
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete?")) {
            handleDelete(_id);
          }
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
      <button
        onClick={() => handleApprove("approved", _id)}
        className="btn btn-success"
      >
        Approve
      </button>
    </div>
  );
};

export default SingleOrder;
