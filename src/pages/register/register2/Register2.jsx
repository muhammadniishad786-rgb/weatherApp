import React, { use, useState } from "react";
import "./Reguster2.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { useForm } from "react-hook-form";

function Register2() {
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

  return (
    <div className="register-container">
      <div className="register-card">
        <h1> </h1>
        <p>Register to get started</p>

        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <Input type="text"
                 placeholder="Enter your full name"
                 {...register("userName",{
                  required: "username required"
                 })} />
          {errors.userName && <p>{errors.userName.message}</p> }

          <Input type="email"
                 {...register("email", {
                  required: "email Required"
                 })} 
                 placeholder="Enter your email" />
          {errors.email && <p>{errors.email.message}</p> }

          <Input type="password"
                 {...register("password", {
                  minLength: {
                    value: 6,
                    message: "minimum 6 charecter"
                  }
                 })}
                 placeholder="create a password" />
          {errors.password && <p>{errors.password.message}</p> }

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

export default Register2;

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