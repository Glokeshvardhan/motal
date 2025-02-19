import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Removed `useNavigate`
import logo from "./img/logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {  // Fixed function name
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg  shadow-sm p-1 fixed-top co">
      
      <div className="container ">
        <NavLink className="navbar-brand" to="/Home">
          <img
            src={logo}
            className="img-fluid"
            alt=""
            style={{ maxHeight: "80px" }}
          />
        </NavLink>

        {/* Toggle Button */}
        <button
          className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="collapsibleNavId"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home"  onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rooms"  onClick={closeNavbar}>
                Rooms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services"  onClick={closeNavbar}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact"  onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Aboutus"  onClick={closeNavbar}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
