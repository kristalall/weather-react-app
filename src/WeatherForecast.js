import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col forecast-by-day">
          Sunday
          <div className="forecast-icon">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="forecast icon"
              width="60"
            />
          </div>
          <span className="forecast-temperature forecast-max">85°</span>{" "}
          <span className="forecast-temperature forecast-min">68°</span>
        </div>
      </div>
    </div>
  );
}
