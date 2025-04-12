import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/weather?city=${city}`);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };


  return (
    <div className="App">
      <h1>Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
