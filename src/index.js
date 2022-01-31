import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./Search";


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function App() {
return (
    <div className="App">
      <Search defaultCity="Atlanta"/>

    </div>
  )
  };
  
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
