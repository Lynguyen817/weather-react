import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let maxtemperature = Math.round(props.data.temp.max);
        return `${maxtemperature} °`;
    }
    function minTemperature(){
        let mintemperature = Math.round(props.data.temp.min);
        return `${mintemperature} °`;
    }
    function formatDay(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"];
     return days[day];
}
return(
    <div className = "WeatherForecastDay">
        <div className = "forecast-day">{formatDay()}</div>
        <div className="forecast-icon"><WeatherIcon code={props.data.weather[0].icon}/></div>
        <div className="forecast-temperature">
            <span className="forecast-temperature-max">{maxTemperature}</span>
            <span className="forecast-temperature-min">{minTemperature}</span>
        </div>
    </div>
);
}