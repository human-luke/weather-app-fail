import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast/Forecast";
import CurrentWeather from "./Components/Current-Weather/Current-Weather";
import EasterEgg from "./Components/Easter-Egg/Easter-Egg";
import { AsyncPaginate } from "react-select-async-paginate";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Components/api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const weatherFetch = fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=airTemperature,pressure,precipitation,humidity,cloudCover,gust,windSpeed&start=${Math.floor(
        Date.now() / 1000
      )}&source=sg`,
      {
        headers: {
          Authorization:
            "7a1fd7d2-b517-11ed-bc36-0242ac130002-7a1fd840-b517-11ed-bc36-0242ac130002",
        },
      }
    );

    Promise.all([weatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        const days = [
          weatherResponse.hours[24],
          weatherResponse.hours[48],
          weatherResponse.hours[72],
          weatherResponse.hours[96],
          weatherResponse.hours[120],
          weatherResponse.hours[144],
          weatherResponse.hours[168],
        ];

        setCurrentWeather({
          city: searchData.label,
          ...weatherResponse.hours[0],
        });

        setForecast({
          city: searchData.label,
          days,
        });
      })
      .catch((err) => console.error(err));
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <EasterEgg />
    </div>
  );
}

export default App;
