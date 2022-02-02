import React , {useState}from"react";

export default function CelciusFahrenheit(props){
  const [unit,setUnit]= useState(null);
  function showCelsius(event) {
    event.preventDefault();
    setUnit(props.data.temperature);
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit(Math.round(props.data.temperature * 9) / 5 + 32);
  }
  
  return (
    <div >
    {unit}
      <span className="units">
      <a href="/" onClick={showCelsius}>
        °C
      </a>{" "}
      | {" "}
       <a href="/" onClick={showFahrenheit}>
        °F
      </a>
      </span>
    </div>
  );
}

