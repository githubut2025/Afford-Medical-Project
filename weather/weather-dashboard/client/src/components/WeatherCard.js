import React from "react";
import './Card.css'

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h1>{data.name}</h1>
      <h3>{data.weather[0].description}</h3>
      <p><strong>Temperature</strong>: {data.main.temp}°C</p>
      <p><strong>Humidity</strong>: {data.main.humidity}%</p>
      <p><strong>Wind Speed</strong>: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
