import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SingleMyTrip from "../SingleMyTrip/SingleMyTrip";
import "./MyTrips.css";

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  // console.log(user.email);

  const url = `https://fast-meadow-84110.herokuapp.com/mytrips/${email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTrips(data);
      });
  }, [trips]);
  return (
    <div className="my-trips-parent">
      <h1 className="text-center p-5">
        Trips You Booked : <span>{trips.length}</span>
      </h1>
      <div className="container my-5">
        <div class="my-trips-container">
          {trips.map((trip, index) => (
            <SingleMyTrip key={trip._id} trip={trip}></SingleMyTrip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
