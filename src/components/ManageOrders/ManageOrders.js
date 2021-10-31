import React, { useEffect, useState } from "react";
import SingleOrder from "../SingleOrder/SingleOrder";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://fast-meadow-84110.herokuapp.com/trips")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrders(data);
      });
  }, [orders]);
  return (
    <div className="order-manage">
      <h1 className="text-center my-5">Total User Orders : {orders.length}</h1>
      <div className="order-header">
        <h5 className="text-center">Name</h5>
        <h5 className="text-center">Contact</h5>
        <h5 className="text-center">Order Id</h5>
        <h5 className="text-center">Date</h5>
        <h5 className="text-center">Email</h5>
        <h5 className="text-center">Status</h5>
        <h5 className="text-center">Actions</h5>
      </div>
      <hr />
      <div>
        {orders.map((order) => (
          <SingleOrder key={order._id} order={order}></SingleOrder>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ManageOrders;
