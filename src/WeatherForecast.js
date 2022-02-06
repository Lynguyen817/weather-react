import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [forecast, setForecast]= useState(null);
    const [loaded, setLoaded]= useState(false);

   useEffect(()=>{
       setLoaded(false);
   },[props.coordinates]);
    function displayForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if(loaded){
    return (
        <div className= "WeatherForecast">
            <div className="row">
                {forecast.map(function(formatDay,index){
                    if (index < 6){
                        return (
                            <div className = "col border border-primary" key={index}>
                                <WeatherForecastDay data={formatDay}/>
                            </div>
                        );
                    } else{
                        return null;
                    }
                })}
            </div>
        </div>
        )
     } else {  
       let apiKey = "8a8052e8868f50698a39b01529899d81";
       let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
       axios.get(url).then (displayForecast); 
       return null;    
     }
    }    
  


