import React, { useState } from "react";
import "./Weather.css";
import Navbar from "../navBar/Nav";

function Weather() {
    const API_KEY = import.meta.env.VITE_WHEATHER_APP_KEY;


    const [city, setCity] = React.useState("");
    const [weather, setWeather] = React.useState(null)
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    // for getting the api function //
    const getWeather = () => {
        setLoading(true);

        setTimeout(() => {
            fetch(url)
        .then((res) => {
            if(!res.ok){
                throw new Error("invalid city name");
            }

            return res.json();
        })
        .then((data) => {
            setWeather(data);
            setError(null)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setWeather(null)
            setLoading(false)
        })
        }, 1000);
        
    }

    // work the function when enter key press 
    const handlKeyDown = (e) => {
        if(e.key === "Enter"){
            getWeather();
        }
    } 
  
  return (
    <> 
    <div className="weather-container">

      <div className="weather-card">

        <h1 className="title">
          Weather App
        </h1>

        <div className="search-box">
          <input 
            type="text"
            placeholder="Search city..."
            value={city}
            onKeyDown={handlKeyDown}
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={getWeather}>
            Search
          </button>
        </div>


        <div className="weather-info">

          {/* for error handling */}
          {error && <h3 style={{color: "red"}}>{error}</h3>}

          {/* for loading animation */}
          {loading && <h3 style={{color: "white"}}>Loading ......</h3>}


          {/* actual code */}
          <h2>{weather?.name}</h2>

          <div className="temperature">
            {weather?.main?.temp} °C
          </div>

          <p className="description">
            {weather?.weather?.[0]?.description}
          </p>


          <div className="details">

            <div className="detail-box">
              <p>Humidity</p>
              <h3>{weather?.main?.humidity}%</h3>
            </div>


            <div className="detail-box">
              <p>Wind</p>
              <h3>{weather?.wind?.speed} km/h</h3>
            </div>


          </div>

        </div>


      </div>

    </div>
    </>
  );
}

export default Weather;