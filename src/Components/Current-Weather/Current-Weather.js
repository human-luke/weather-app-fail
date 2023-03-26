import React, { useState, useCallback } from "react";
import EasterEgg from "../Easter-Egg/Easter-Egg.js";
import "./Current-Weather.css";

const CurrentWeather = ({ data }) => {
  const [currentTempUnit, setCurrentTempUnit] = useState("Celsius");
  const [buttonText, setButtonText] = useState("°C");
  const [weatherData, setWeatherData] = useState(data);

  const ToggleCToF = useCallback(() => {
    let tempUnit;
    if (currentTempUnit === "Celsius") {
      setCurrentTempUnit("Fahrenheit");
      tempUnit = [Math.round(data.airTemperature.sg * 9) / 5 + 32];
      setWeatherData(tempUnit);
      setButtonText("°F");
    } else {
      setCurrentTempUnit("Celsius");
      tempUnit = [Math.round(data.airTemperature.sg)];
      setWeatherData(tempUnit);
      setButtonText("°C");
    }
    console.log(tempUnit);
  }, [weatherData]);

  return (
    <div className="weather">
      <div className="top">
        <button
          class="btn btn-outline-light btn-sm"
          onClick={() => ToggleCToF()}
        >
          Toggle C to F
        </button>
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description"></p>
        </div>
        <div className="clouds">
          {data.cloudCover.sg <= 25 ? (
            <img src="icons/01d.png" className="clouds" />
          ) : data.cloudCover.sg <= 50 ? (
            <img src="icons/02d.png" className="clouds" />
          ) : data.cloudCover.sg <= 75 ? (
            <img src="icons/03d.png" className="clouds" />
          ) : data.cloudCover.sg <= 100 ? (
            <img src="icons/04d.png" className="clouds" />
          ) : null}
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.airTemperature.sg)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {" "}
              {Math.round(data.airTemperature.sg)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {" "}
              {Math.round(data.windSpeed.sg)}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {" "}
              {Math.round(data.humidity.sg)}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {" "}
              {Math.round(data.pressure.sg)} hPa
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"></span>

            <span className="parameter-value">
              {" "}
              {weatherData[0]}
              {buttonText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
