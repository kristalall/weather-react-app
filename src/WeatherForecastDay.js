import React from "react";

export default function WeatherForecastDay(props) {
  let forecastIconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      {day()}
      <div className="forecast-icon">
        <img src={forecastIconUrl} alt="forecast icon" width="60" />
      </div>
      <span className="forecast-temperature forecast-max">
        {maxTemperature()}
      </span>{" "}
      <span className="forecast-temperature forecast-min">
        {minTemperature()}
      </span>
    </div>
  );
}
