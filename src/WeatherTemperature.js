import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("imperial");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <span className="WeatherTemperature">
        {props.fahrenheit}
        <span className="units">
          <a href="/" className="active">
            °F
          </a>{" "}
          |
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <span className="WeatherTemperature">
        {celsius}
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          |
          <a href="/" className="active">
            °C
          </a>
        </span>
      </span>
    );
  }
}
