import React from "react";
import "./Nav.css";
import {Link, useNavigate} from "react-router-dom";
import Button from "../button/Button";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }

  console.log('hello');
  
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

        <Button text="logout" onClick={handleLogout} />

      </div>

    </nav>
  );
}

export default Navbar;