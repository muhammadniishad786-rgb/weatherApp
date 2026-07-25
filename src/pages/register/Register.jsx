import React, { use, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function Register() {
  const [userName, setUseraName] = React.useState("");
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")

  const navigate = useNavigate()

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
    localStorage.setItem("user", JSON.stringify(user)); // JSON.stringify() converts a JavaScript object or array into a string.

    alert("registration successfull")

    navigate('/login')

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
          {/* <input
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setUseraName(e.target.value)}
          /> */}
          <Input type="text"
                 placeholder="Enter your full name"
                 onChange={(e) => setUseraName(e.target.value)}
                 className="register-input" />
                 

          {/* <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <Input type="email"
                 placeholder="Enter your email"
                 onChange={(e) => setEmail(e.target.value)}
                 className="register-input" />

          {/* <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <Input type="password"
                 placeholder="create a password"
                 onChange={(e) => setPassword(e.target.value)}
                 className="register-input" />

          {/* <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> */}
          <Input type="password"
                 placeholder="Confirm password"
                 onChange={(e) => setConfirmPassword(e.target.value)}
                 className="register-input" />

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