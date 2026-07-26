import React from 'react'
import Input from '../../../components/input/Input'
import { useForm } from 'react-hook-form'
import Button from '../../../components/button/Button';
import { useNavigate } from 'react-router-dom';

function Register2() {
    const {register, handleSubmit, formState: {errors}} = useForm(); 
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        navigate("/login")
    }

  return (
    <div>
        <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email"
               {...register("email", {
                required: "email required"
               })} // register() connects an input field to React Hook Form so it can track and manage its value.
               className="register2-input" />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <Input type="password"
               {...register("password", {
                minLength: {
                    value: 6,
                    message: "minimum 6 charecters"
                }
               })}
               className="register2-input" />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <Button type="Submit" className="register2-btn" text="register" />
               
      </form>
    </div>
  )
}

export default Register2


// const onSubmit = (data) => {
//         console.log(data)
//     }

// the data parameter contains the value of all the registered inputs


// register() connects an input field to React Hook Form so it can track and manage its value.
//handleSubmit() collects the values from all registered inputs, validates them, and if everything is valid, calls your submit function with the form data.