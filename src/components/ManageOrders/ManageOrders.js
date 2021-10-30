import React, { useEffect, useState } from "react";
import SingleOrder from "../SingleOrder/SingleOrder";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://fast-meadow-84110.herokuapp.com/trips")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  return (
    <div className="container">
      <h1>Order Management : {orders.length}</h1>
      <div className="order-header">
        <h5 className="text-center w-25">Name</h5>
        <h5 className="text-center w-25">Contact</h5>
        <h5 className="text-center w-25">Order Id</h5>
        <h5 className="text-center w-25">Email</h5>
      </div>
      <div>
        {orders.map((order) => (
          <SingleOrder key={order._id} order={order}></SingleOrder>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
