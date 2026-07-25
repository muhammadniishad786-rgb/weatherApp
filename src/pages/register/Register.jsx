import React, { use, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

function Register() {
  const [userName, setUseraName] = React.useState("");
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")

  const handleRegister = (e) => {
    e.preventDefault();

    // check values exist inside user, email and password
    if(!userName || !email || !password || !confirmPassword){
      alert("Please fill the form !!")
      return;
    }

    // check the confirm password
    if(password != confirmPassword){
      alert("The password and confirm password is not same");
      return;
    }

    // create user object
    const user = {
      userName,
      email,
      password,
      confirmPassword
    }

    // save to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("registration successfull")

    // clear input fields
    setUseraName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }


  return (
    <div className="register-container">
      <div className="register-card">
        <h1> </h1>
        <p>Register to get started</p>

        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setUseraName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button text="register" className="register-btn" type='submit'  />
        </form>

        <p className="login-text">
          Already have an account? <span><Link to='/login'>Login</Link></span>
        </p>
      </div>
    </div>
  );
}

export default Register;