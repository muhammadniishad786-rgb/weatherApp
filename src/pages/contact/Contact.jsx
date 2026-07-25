import React, { useState } from "react";
import "./Contact.css";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userDetails, setUserDetails] = React.useState("")



  const alertMessage = () => {
    if(name.length === 0 && email.length === 0 ){
      alert("fill the form")
    }else{
      alert("form filled")
      setUserDetails(name)
    }
  }

  
  

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <p className="contact-text">
          We'd love to hear from you! If you have any questions, suggestions,
          or feedback about WeatherApp, feel free to get in touch.
        </p>

        <form className="contact-form">
          {/* <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/> */}
          <Input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} className="contact-input" />

          {/* <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/> */}
          <Input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} className="contact-input" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <Button text={"Send message"} className="btn contact-btn" onClick={alertMessage}/>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>📧 weatherapp@email.com</p>
          <p>📞 +91 9778580349</p>
          <p>📍 Kerala, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;