import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={changeToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={changeToCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
