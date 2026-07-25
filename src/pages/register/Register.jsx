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

  const [formData, setFormData] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value        
    })
  }

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    // check values exist inside user, email and password
    // if(!userName || !email || !password || !confirmPassword){
    //   alert("Please fill the form !!")
    //   return;
    // }
    if(formData.userName.trim() === ""){
      alert("user name is required");
      return;
    }

    if(formData.email.trim() === ""){
      alert("email is required")
      return
    }

    //password checking
    if(formData.password.length < 6){
      alert("password must contain atleast 6 charecters")
    }

    // check the confirm password
    if(formData.password != formData.confirmPassword){
      alert("The password and confirm password is not same");
      return;
    }

    // create user object
    // const user = {
    //   userName,
    //   email,
    //   password,
    //   confirmPassword
    // }
    const user = {
      userName: formData.userName,
      email: formData.email,
      password: formData.password
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
                 name="userName"
                 placeholder="Enter your full name"
                 value={formData.userName}
                //  onChange={(e) => setUseraName(e.target.value)}
                 onChange={handleChange}
                 className="register-input" />
                 

          {/* <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <Input type="email"
                 name="email"
                 placeholder="Enter your email"
                 value={formData.email}
                //  onChange={(e) => setEmail(e.target.value)}
                 onChange={handleChange}
                 className="register-input" />

          {/* <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <Input type="password"
                 name="password"
                 placeholder="create a password"
                 value={formData.password}
                //  onChange={(e) => setPassword(e.target.value)}
                 onChange={handleChange}
                 className="register-input" />

          {/* <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> */}
          <Input type="password"
                 name="confirmPassword"
                 placeholder="Confirm password"
                 value={formData.confirmPassword}
                //  onChange={(e) => setConfirmPassword(e.target.value)}
                 onChange={handleChange}
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