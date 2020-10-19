import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
      <h1>New York</h1>
      <ul>
        <li>Tuesday 5:04</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Mostly Cloudy"
          />
          18ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 66%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
