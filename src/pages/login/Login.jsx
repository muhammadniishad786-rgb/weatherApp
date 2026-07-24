import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome </h1>
        <p>Sign in to your account</p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

         <Link to="/" ><Button text="login" className="register-btn" /></Link>
        </form>

        <p className="register-text">
          Don't have an account? <span><Link to='/register'>Register</Link></span>
        </p>
      </div>
    </div>
  );
}

export default Login;