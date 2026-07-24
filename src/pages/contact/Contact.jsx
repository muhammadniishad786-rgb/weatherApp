import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <p className="contact-text">
          We'd love to hear from you! If you have any questions, suggestions,
          or feedback about WeatherApp, feel free to get in touch.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Send Message</button>
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