import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SingleMyTrip from "../SingleMyTrip/SingleMyTrip";

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
    <div>
      <h1>This is My Trips {trips.length}</h1>
      <div className="container my-5">
        <div class="row">
          {trips.map((trip, index) => (
            <SingleMyTrip key={trip._id} trip={trip}></SingleMyTrip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
