import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../Images/logo.png";
import profilePic from "../../Images/profile-pic.png";

const Navbar = () => {
  const { user, handleSignOut } = useAuth();

  const Navigate = useNavigate();
  const handleAppointment = () => {
    Navigate("/login");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" height="45px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link " to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link " to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link " to="/about-us">
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link " to="/contact-us">
                  ContactUs
                </NavLink>
              </li>
            </ul>
            {!user.email ? (
              <button
                onClick={handleAppointment}
                type="button"
                className="btn btn-warning px-4 ms-5 rounded-pill"
              >
                Appointment
              </button>
            ) : (
              <ul>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="rounded-circle"
                      height="25px"
                    />
                    <span className="dropdown-toggle ps-2 text-white">
                      {user.displayName}
                    </span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-arrow mt-4">
                    <li>
                      <button
                        onClick={handleSignOut}
                        type="button"
                        className="btn btn-dark form-control"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
