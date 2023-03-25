import EasterEgg from "../Easter-Egg/Easter-Egg.js";
// import modal from "bootstrap";
import "./Current-Weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* <EasterEgg /> */}
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          {/* // potentially add dynamic if statement here// */}
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
          ) : null}{" "}
          {/* <img alt="weather" className="weather-icon" src="icons/01d.png" /> */}
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
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
