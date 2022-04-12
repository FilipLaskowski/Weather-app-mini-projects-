import React, { useEffect, useState } from "react";
// Components import
import Search from "./components/Search";
import Weather from "./components/Weather";
import Error from "./components/Error";

const api = {
  key: "c11c1870c4cb02c80a79b86ed2188c7b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  // States
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    name: "None",
    sys: { country: "None" },
    main: { temp: "None" },
    weather: [{ description: "None" }],
  });
  const [notFound, setNoFound] = useState();
  const [bg, setBg] = useState("");
  //functions
  const bgChange = () => {
    if (weather.weather[0].main === "Clear") {
      setBg("clear-sky");
    }
    if (weather.weather[0].main === "Clouds") {
      setBg("scattered-clouds");
    }
    if (weather.weather[0].main === "Rain") {
      setBg("shower-rain");
    }
    if (weather.weather[0].main === "Drizzle") {
      setBg("rain");
    }
    if (weather.weather[0].main === "Thunderstorm") {
      setBg("thunderstorm");
    }
    if (weather.weather[0].main === "Snow") {
      setBg("snow");
    }
    if (weather.weather[0].main === "Atmosphere") {
      setBg("mist");
    }
  };
  // Effects
  useEffect(() => {
    const getWeather = async () => {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`).then(
        (res) => {
          if (res.ok) {
            res.json().then((result) => setWeather(result));
            setNoFound(false);
          }
          if (res.status === 404) {
            setNoFound(true);
          }
          if (res.status === 400) {
            setNoFound(true);
          }
        }
      );
    };
    getWeather();
  }, [query]);
  useEffect(() => {
    bgChange();
  }, [weather]);

  return (
    <main className={bg}>
      <Search setQuery={setQuery} />
      {notFound ? <Error /> : <Weather weather={weather} />}
    </main>
  );
}

export default App;
