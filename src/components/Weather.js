import React from "react";

const Weather = ({ weather }) => {
  // Variables
  const temp = weather.main.temp;
  const roundedTemp = Math.round(temp);

  //Functions
  const dateBuilder = (d) => {
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
      "December",
    ];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather-container">
      <h1>{`${weather.name}, ${weather.sys.country}`}</h1>
      <h3>{dateBuilder(new Date())}</h3>
      <h3>{weather.weather[0].description}</h3>
      <h1>{`${roundedTemp}°C `}</h1>
    </div>
  );
};

export default Weather;
