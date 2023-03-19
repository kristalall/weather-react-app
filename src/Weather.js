import React, { useState } from "react";
import "./Weather.css";

import axios from "axios";

export default function Weather(props) {
  const [weatherKnown, setWeatherKnown] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      iconUrl: "http://openweathermap.org/img/wn/03d@2x.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Saturday",
      time: "2:28",
    });
    setWeatherKnown(true);
  }
  if (weatherKnown) {
    return (
      <div className="Weather">
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <h2>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
                {weatherData.temperature}{" "}
                <span className="units">
                  <a href="/" className="active">
                    °F
                  </a>{" "}
                  |<a href="/">°C</a>
                </span>
              </h2>
            </div>
            <div className="col-6 city-selector">
              <form>
                <input
                  type="search"
                  placeholder="Select a different city"
                  className="fst-italic selector-searchbox"
                />
                <input
                  type="submit"
                  value="Search"
                  className="fst-italic selector-searchbox"
                />
              </form>
              <button
                type="button"
                className="btn btn-primary current-location"
              >
                Current Location
              </button>
            </div>
          </div>

          <div className="row forecast">
            <div className="col">
              <div className="row">
                <div className="col date-time">
                  <p className="fw-bold">
                    <span className="align-middle current-day-time">
                      {weatherData.date}
                      <br />
                      {weatherData.time}
                    </span>
                  </p>
                </div>
                <div className="col-5">
                  <p className="text-start">
                    Humidity: {weatherData.humidity}%
                    <br />
                    {weatherData.description} <br />
                    Wind: {weatherData.wind}mph
                  </p>
                </div>
              </div>
              <div className="weather-forecast"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Houston";
    let apiKey = "b141c9b5edc44b9a871e4ebe5549ac92";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
