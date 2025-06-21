import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  shadow-sm fixed-top co">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/Home">
          <img
            src={logo}
            className="img-fluid me-2"
            alt="Logo"
            style={{ maxHeight: "50px" }}
          />
          <span className="fw-bold">LUXURY STAY</span>
        </NavLink>

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

        <div 
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} 
          id="collapsibleNavId"
        >
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {[
              { path: "/Home", name: "Home" },
              { path: "/rooms", name: "Rooms" },
              { path: "/services", name: "Services" },
              { path: "/contact", name: "Contact" },
              { path: "/Aboutus", name: "About Us" }
            ].map((item) => (
              <li className="nav-item mx-1" key={item.name}>
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 rounded ${isActive ? "active bg-primary" : ""}`
                  } 
                  to={item.path}
                  onClick={closeNavbar}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
