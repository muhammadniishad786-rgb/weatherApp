import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
   <nav className="navbar">
      <div className="logo">
        WeatherApp
      </div>


      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;