import React from "react";
import "./Nav.css";
import {Link, useNavigate} from "react-router-dom";
import Button from "../button/Button";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    alert("you want to logout...??")
    localStorage.removeItem("token");
    navigate("/login")
  }

  const user = JSON.parse(localStorage.getItem('users'))

  // const userName = user.find((name) => {
  //  return console.log(user)
  // })
  // console.log(userName)

  
  return (
   <nav className="navbar">
      
      <div className="logo">
        WeatherApp
      </div>

      <div>
        {/* Hello,{userName} */}
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

                              // useNavigate //

  // useNavigate is used when you want to navigate after some action, like clicking a button or submitting a form.
  // useNavigate എന്നത് ഒരു Hook ആണ്. Button click ചെയ്തതിനുശേഷമോ Login വിജയിച്ചതിനുശേഷമോ programmatically
  // മറ്റൊരു page-ലേക്ക് പോകാൻ ഇത് ഉപയോഗിക്കുന്നു.