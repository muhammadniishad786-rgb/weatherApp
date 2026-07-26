import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";

function Login() {

   const {register, handleSubmit} = useForm();

    // const [email, setEmail] = React.useState("")
    // const [password, setPassword] = React.useState("")
    // const [formData, setFormData] = React.useState({
    //   email,
    //   password
    // });

    const navigate = useNavigate();

    // function for handleChange
    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value
    //   })
    // }

    const onSubmit = (data) => {

      // get registered user from localStorage
      const user = JSON.parse(localStorage.getItem('user')); // JSON.parse() converts a JSON string back into a JavaScript object or array.

      // check if a user exitst
      if(!user){
        alert("no account found, please register first");
        return;
      }

      // compare credential
      if(data.email === user.email && data.password === user.password){
         localStorage.setItem("token", "loggedIn")
         navigate("/")
      }else{
        alert("invalid email or password")
      }
    }

    // const handleLogin = (e) => {
    //   e.preventDefault();

    //   // get registered user from localStorage
    //   const user = JSON.parse(localStorage.getItem('user')); // JSON.parse() converts a JSON string back into a JavaScript object or array.

    //   // check if a user exitst
    //   if(!user){
    //     alert("no account found, please register first");
    //     return;
    //   }

    //   // compare credential
    //   if(formData.email === user.email && formData.password === user.password){
    //      localStorage.setItem("token", "loggedIn")
    //      navigate("/")
    //   }else{
    //     alert("invalid email or password")
    //   }
       
    // }
  return (
    <div className="login-container" >
      <div className="login-card">
        <h1>Welcome </h1>
        <p>Sign in to your account</p>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {/* <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          {/* <Input type="email" 
                 name="email"
                 placeholder="Enter your email" 
                 value={formData.email}
                 onChange={handleChange} 
                 className="login-input" /> */}
          <Input type="email"
                 placeholder="Enter your email"
                 {...register("email", {
                  required: "email required"
                 })} />

          {/* <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          {/* <Input type="password" 
                 name="password"
                 placeholder="Enter your password"
                 value={formData.password} 
                 onChange={handleChange} 
                 className="login-input" /> */}
          <Input type="password"
                 placeholder="Enter your password"
                 {...register("password", {
                  minLength: {
                    value: 6,
                    message: "minimum 6 charecters"
                  }
                 })} />

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