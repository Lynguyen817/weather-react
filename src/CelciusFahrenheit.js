import React , {useState}from"react";

export default function CelciusFahrenheit(props){
  const [unit,setUnit]= useState(null);
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit(Math.round((props.temperature * 9) / 5 + 32));
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit(props.temperature);
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

