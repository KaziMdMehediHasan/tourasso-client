import React from "react";
import "./SingleOrder.css";

const SingleOrder = (props) => {
  const { firstName, lastName, contact, email, _id } = props.order;

  const handleDelete = (id) => {
    console.log(id);

    // sending request to the server to delete orders

    fetch(`https://fast-meadow-84110.herokuapp.com/trips/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <div className="single-order my-5 shadow rounded-3 p-2">
      <p className="text-center w-25">
        {firstName} {lastName}
      </p>
      <p className="text-center w-25">{contact}</p>
      <p className="text-center w-25">{_id}</p>
      <p className="text-center w-25">{email}</p>
      <button onClick={() => handleDelete(_id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default SingleOrder;
