import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./Search";
import Footer from "./Footer";
import './index.css';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function App() {
return (
    <div className="App">
      <Search defaultCity="Atlanta"/>
      <Footer/>
    </div>
  )
  };
  
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
