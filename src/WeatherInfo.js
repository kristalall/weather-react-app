import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row forecast">
        <div className="col">
          <div className="row">
            <div className="col date-time">
              <p className="fw-bold">
                <span className="align-middle current-day-time">
                  <FormattedDate date={props.data.date} />
                </span>
              </p>
            </div>
            <div className="col-5">
              <p className="text-start">
                Humidity: {props.data.humidity}%
                <br />
                <span className="text-capitalize">
                  {props.data.description}
                </span>{" "}
                <br />
                Wind: {props.data.wind}mph
              </p>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
    </div>
  );
}
