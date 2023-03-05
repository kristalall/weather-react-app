import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Houston",
    temperature: 70,
    iconUrl: "http://openweathermap.org/img/wn/03d@2x.png",
    description: "Cloudy",
    humidity: 30,
    wind: 7,
    date: "Saturday",
    time: "2:28",
  };
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
            <button type="button" className="btn btn-primary current-location">
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
}
