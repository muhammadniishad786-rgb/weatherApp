import React from "react";
import "./About.css";
import Button from "../../components/button/Button";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About WeatherApp</h1>

        <p>
          WeatherApp is a simple and responsive weather application built with
          React. It allows users to search for any city and instantly view the
          latest weather information.
        </p>

        <div className="features">
          <h2>Features</h2>

          <ul>
            <li>🌍 Search weather by city</li>
            <li>🌡️ Live temperature updates</li>
            <li>💧 Humidity information</li>
            <li>💨 Wind speed details</li>
            <li>📱 Responsive design</li>
          </ul>
        </div>
        
        <div className="tech-stack">
          <h2>Built With</h2>
          <Button className="btn about-btn" text="Build This"/>

          <p>
            React • React Router • CSS • OpenWeather API
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;