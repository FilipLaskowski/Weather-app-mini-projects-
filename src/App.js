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
  const [query, setQuery] = useState("Paris");
  const [weather, setWeather] = useState({});
  const [notFound, setNoFound] = useState();
  // Effects
  useEffect(() => {
    const getWeather = async () => {
      await fetch(
        `${api.base}weather?q=${query}&units=metric&appid=${api.key}`
      ).then((res) => {
        if (res.ok) {
          res.json().then((result) => setWeather(result));
          setNoFound(false);
        }
        if (res.status === 404) {
          setNoFound(true);
          return;
        }
        if (res.status === 400) {
          setNoFound(true);
        }
      });
    };
    getWeather();
  }, [query]);

  return (
    <main>
      <Search setQuery={setQuery} />
      {notFound ? <Error /> : <Weather weather={weather} />}
    </main>
  );
}

export default App;
