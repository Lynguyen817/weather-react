import React , {useState} from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import CelciusFahrenheit from "./CelciusFahrenheit";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

import "./Search.css";
import "./index.css";



export default function Search() {
  const [city,setCity]= useState();
  const [weather, setWeather] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    const temperature = Math.round(response.data.main.temp);
    const city = response.data.name;
    const humidity  =response.data.main.humidity;
    const wind  =response.data.wind.speed;
    const description  =response.data.weather[0].description;
    const icon  =response.data.weather[0].icon;
    const coordinates = response.data.coord;

     setWeather(
      <div className="weather">
          <h2>{city} </h2>
          <h6> <DateAndTime/></h6>
          <h1>
          <WeatherIcon code={icon} size={80}/>
        
          <CelciusFahrenheit unit={temperature}/>
          </h1>
          <h3> {description} </h3>
          <h6>
             Humidity : {humidity}%
            <br />
             Wind : {wind}  km/h
          </h6>
          <WeatherForecast coordinates={coordinates}/>
      </div>
      );
     }
     function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8a8052e8868f50698a39b01529899d81";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
      return(
        <div className="searchForm">
        <form onSubmit={handleSubmit}>
        <input
          type="search"
          size="20"
          placeholder="Enter a city .."
          onChange={updateCity}
        />
        <button type="submit" className="btn btn-primary">
          {" "}
          Search{" "}
        </button>
        </form>
        <div>{weather}</div>
       </div>
      );
}
