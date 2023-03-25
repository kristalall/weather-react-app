import React, { useState } from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherKnown, setWeatherKnown] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
    });
    setWeatherKnown(true);
  }

  function search() {
    let apiKey = "b141c9b5edc44b9a871e4ebe5549ac92";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherKnown) {
    return (
      <div className="Weather">
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <WeatherTemperature info={weatherData} />
            </div>
            <div className="col-6 city-selector">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Select a different city"
                  className="fst-italic selector-searchbox"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
