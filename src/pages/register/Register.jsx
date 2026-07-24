import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1> </h1>
        <p>Register to get started</p>

        <form className="register-form">
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Create a password"
          />

          <input
            type="password"
            placeholder="Confirm password"
          />

          <Button text="register" className="register-btn" />
        </form>

        <p className="login-text">
          Already have an account? <span><Link to='/login'>Login</Link></span>
        </p>
      </div>
    </div>
  );
}

export default Register;