import React, {useEffect, useState} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    const [forecast, setForecast]= useState(null);
    const [loaded, setLoaded]= useState(false);

    useEffect(()=>{
        setLoaded(false);},[props.coordinates]);
    function displayForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    function load(){
    let apiKey = "8a8052e8868f50698a39b01529899d81";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayForecast);
    }
    if(loaded){
    return (
        <div className= "WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast,index){
                    if (index < 5){
                        return (
                            <div className = "col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        );
                    } else{
                        load();
                        return null;
                    }
                })}
            </div>
        </div>
        )
     }
    }    
  


