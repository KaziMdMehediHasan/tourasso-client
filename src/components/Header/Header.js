import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* brand logo */}
        <div className="brand">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="brand" />
            <h5 className="d-inline fw-bold">Tourasso</h5>
          </Link>
        </div>
        {/* nav items */}
        <div>
          {/* hamburger menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* hamburger menu end */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
              <Link to="/mytrips" className="nav-link">
                My Trips
              </Link>

              {/* logged in user name */}
              {user?.displayName || user?.email ? (
                <li className="nav-link">{user?.displayName || user?.email}</li>
              ) : (
                ""
              )}

              {/* end of logged in user name */}

              {user?.displayName || user?.email ? (
                <button
                  onClick={logOut}
                  className="nav-link btn btn-danger text-white"
                >
                  Logout
                </button>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
          {/* nav items end */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
