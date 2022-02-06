import React , { useState }from"react";
import "./Search.css";
export default function Temperature(props){
  const [unit,setUnit]=useState(props.unit);
  function showCelsius(event) {
    event.preventDefault();
    setUnit(props.unit);
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit(Math.round((props.unit * 9) / 5 + 32));
  }
  return (
  <span>
    {unit}
    <span className="units">  
    <a href="/" onClick={showCelsius}>
      {" "}°C</a> |  {" "}
    <a href="/" onClick={showFahrenheit}>°F</a>
    </span>
  </span>
 );
}



