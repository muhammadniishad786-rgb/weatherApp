import React, { use, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";

function Register() {
  // const [userName, setUseraName] = React.useState("");
  // const [email, setEmail] = React.useState("")
  // const [password, setPassword] = React.useState("")
  // const [confirmPassword, setConfirmPassword] = React.useState("")

  // stores user details in a single state using object
  // const [formData, setFormData] = React.useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // })

  // handling user details using useForm() hook that provided by react so we can reduce the code and multiple states
  const {register, handleSubmit, formState: {errors}} = useForm();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value        
    })
  }
//   ...formData → copies all properties of the object.
// Used when updating state to avoid losing existing values.
// Used to create a copy of an object.

  const navigate = useNavigate()

  const onSubmit = (data) => {

    if(data.confirmPassword != data.password){
      alert("The password and confirm password is not same")
    }

    localStorage.setItem("user", JSON.stringify(data)); // JSON.stringify() converts a JavaScript object or array into a string.
    alert("registred successfully")

    navigate('/login')

    // clear all the input
    reset();
  }

  // const handleRegister = (e) => {
    // e.preventDefault();

    // check values exist inside user, email and password
    // if(!userName || !email || !password || !confirmPassword){
    //   alert("Please fill the form !!")
    //   return;
    // }

    // this condition completed using useForm()
    // if(formData.userName.trim() === ""){
    //   alert("user name is required");
    //   return;
    // }

    // this condition completed using useForm()
    // if(formData.email.trim() === ""){
    //   alert("email is required")
    //   return
    // }

    //password checking
    // if(formData.password.length < 6){
    //   alert("password must contain atleast 6 charecters")
    // }

    // check the confirm password
    // if(formData.password != formData.confirmPassword){
    //   alert("The password and confirm password is not same");
    //   return;
    // }

    // create user object
    // const user = {
    //   userName,
    //   email,
    //   password,
    //   confirmPassword
    // }
    // const user = {
    //   userName: formData.userName,
    //   email: formData.email,
    //   password: formData.password
    // }

    // save to localStorage
    // localStorage.setItem("user", JSON.stringify(user)); // JSON.stringify() converts a JavaScript object or array into a string.

    // alert("registration successfull")

    // navigate('/login')

    // clear input fields
  //   setUseraName("");
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
  // }


  return (
    <div className="register-container">
      <div className="register-card">
        <h1> </h1>
        <p>Register to get started</p>

        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          {/* <input
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setUseraName(e.target.value)}
          /> */}
          {/* <Input type="text"
                 name="userName"
                 placeholder="Enter your full name"
                 value={formData.userName}
                //  onChange={(e) => setUseraName(e.target.value)}
                 onChange={handleChange}
                 className="register-input" /> */}
          <Input type="text"
                 placeholder="Enter your full name"
                 {...register("userName",{
                  required: "username required"
                 })} />
          {errors.userName && <p>{errors.userName.message}</p> }
                 

          {/* <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          {/* <Input type="email"
                 name="email"
                 placeholder="Enter your email"
                 value={formData.email}
                //  onChange={(e) => setEmail(e.target.value)}
                 onChange={handleChange}
                 className="register-input" /> */}
          <Input type="email"
                 {...register("email", {
                  required: "email Required"
                 })} 
                 placeholder="Enter your email" />
          {errors.email && <p>{errors.email.message}</p> }

          {/* <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          {/* <Input type="password"
                 name="password"
                 placeholder="create a password"
                 value={formData.password}
                //  onChange={(e) => setPassword(e.target.value)}
                 onChange={handleChange}
                 className="register-input" /> */}
          <Input type="password"
                 {...register("password", {
                  minLength: {
                    value: 6,
                    message: "minimum 6 charecter"
                  }
                 })}
                 placeholder="create a password" />
          {errors.password && <p>{errors.password.message}</p> }

          {/* <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> */}
          {/* <Input type="password"
                 name="confirmPassword"
                 placeholder="Confirm password"
                 value={formData.confirmPassword}
                //  onChange={(e) => setConfirmPassword(e.target.value)}
                 onChange={handleChange}
                 className="register-input" /> */}
          <Input type="password"
                 {...register("confirmPassword", {
                  required: "enter the password again"
                 })} 
                 placeholder="Confirm password" />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p> }

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

                             // useForm() react hook  //
  
    // useForm() is a React Hook Form hook that manages your entire form.
    // useForm() creates and manages a form, and provides functions to handle inputs, validation, submission, and resetting.

    // register() → Connects inputs to the form.
    // handleSubmit() → Handles form submission.
    // reset() → Clears or resets the form.
    // watch() → Watches input values.
    // formState.errors → Contains validation errors.



// Master manual validation with useState. // complete
// ✅ Learn validation with a formData object. // complete
// ✅ Learn React Hook Form. //pending
// ✅ Learn React Hook Form + Zod. pending