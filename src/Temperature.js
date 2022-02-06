import React , { useState }from"react";
import "./Search.css";



export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.unit}</span>
        <span className="units">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenTemp = (props.unit * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahrenTemp)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            ºC{" "}
          </a>{" "}
          | ºF
        </span>
      </span>
    );
  }
}