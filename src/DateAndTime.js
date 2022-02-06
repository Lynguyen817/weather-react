import React from "react";

export default function DateAndTime(){
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let TwentyFourHour = now.getHours();
let mid = "pm";
if (hours > 12) {
  hours = hours - 12;
}
if (hours === 0){
  hours = 12;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (TwentyFourHour < 12){
  mid = "am";
}
return <h5>
  {day},{month} {date}, {year} <br/> {hours} : {minutes} {mid}
</h5>;
}
