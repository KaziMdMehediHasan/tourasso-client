import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="get-back">
        <Link to="/home">
          <button className="btn btn-warning">Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
