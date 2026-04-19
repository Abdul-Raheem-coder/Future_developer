import React, { useState } from 'react'

export default function Home() {
  const [city,setCity] = useState("");
  const [weather,setWeather] = useState("");
  const apiKey = import.meta.env.VITE_APP_KEY;
  const handleFetchWeather = async(e)=>{
    e.preventDefault();

    try {
      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
      );
      const data = await respone.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleFetchWeather}>
        <input type="text" 
        placeholder='enter city name'
         value={city}
        onChange={(e)=>setCity(e.target.value)
        }/>
        <button type='submit'>Fetch Weather Data</button>
      </form>
      {weather && (
        <div>
          <h1>{(weather.main.temp - 273.12).toFixed(2)}&deg;C</h1>
          <h2>{weather.main.humidity}%Humidity</h2>
          <h2>{weather.weather[0].main}</h2>
        </div>
      )}
    </div>
    
  );
}
