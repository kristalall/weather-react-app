import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

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
