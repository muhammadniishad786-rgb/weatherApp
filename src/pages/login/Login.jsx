import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function Login() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();

      // get registered user from localStorage
      const user = JSON.parse(localStorage.getItem('user')); // JSON.parse() converts a JSON string back into a JavaScript object or array.

      // check if a user exitst
      if(!user){
        alert("no account found, please register first");
        return;
      }

      // compare credential
      if(email === user.email && password === user.password){
         localStorage.setItem("token", "loggedIn")
         navigate("/")
      }else{
        alert("invalid email or password")
      }
       
    }
  return (
    <div className="login-container" >
      <div className="login-card">
        <h1>Welcome </h1>
        <p>Sign in to your account</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

         <Button text="login" className="register-btn" type="submit" />
        </form>

        <p className="register-text">
          Don't have an account? <span><Link to='/register'>Register</Link></span>
        </p>
      </div>
    </div>
  );
}

export default Login;


                                                  // useNavigate //

  // useNavigate is used when you want to navigate after some action, like clicking a button or submitting a form.
  // useNavigate എന്നത് ഒരു Hook ആണ്. Button click ചെയ്തതിനുശേഷമോ Login വിജയിച്ചതിനുശേഷമോ programmatically
  // മറ്റൊരു page-ലേക്ക് പോകാൻ ഇത് ഉപയോഗിക്കുന്നു.