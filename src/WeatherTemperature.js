import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h1>{props.info.city}</h1>
      <h2>
        <img src={props.info.iconUrl} alt={props.info.description} />
        {props.info.temperature}{" "}
        <span className="units">
          <a href="/" className="active">
            °F
          </a>{" "}
          |<a href="/">°C</a>
        </span>
      </h2>
    </div>
  );
}
