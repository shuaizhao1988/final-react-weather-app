import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

import WeatherForecastHourly from "./WeatherForecastHourly";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastHourly data={forecast.list[0]} />
        <WeatherForecastHourly data={forecast.list[1]} />
        <WeatherForecastHourly data={forecast.list[2]} />
        <WeatherForecastHourly data={forecast.list[3]} />
        <WeatherForecastHourly data={forecast.list[4]} />
        <WeatherForecastHourly data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "c1e2ce826268a3eec47d68f632fb9a68";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
