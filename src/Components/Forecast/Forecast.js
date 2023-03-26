import React, { useState, useCallback } from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import { Accordion, Collapse } from "react-bootstrap";
import { button } from "react-bootstrap";
import transitions from "bootstrap";
import "./Forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastDays);

  const [currentTempUnit, setCurrentTempUnit] = useState("Celcius");
  const [buttonText, setButtonText] = useState("°C");
  const [weatherData, setWeatherData] = useState(data);

  const ToggleCToF = useCallback(() => {
    let tempUnit;
    if (currentTempUnit === "Celcius") {
      setCurrentTempUnit("Fahrenheit");
      tempUnit = [
        Math.round(data.days[0].airTemperature.sg * 9) / 5 + 32,
        Math.round(data.days[1].airTemperature.sg * 9) / 5 + 32,
        Math.round(data.days[2].airTemperature.sg * 9) / 5 + 32,
        Math.round(data.days[3].airTemperature.sg * 9) / 5 + 32,
        Math.round(data.days[4].airTemperature.sg * 9) / 5 + 32,
        Math.round(data.days[5].airTemperature.sg * 9) / 5 + 32,
        Math.round(data.days[6].airTemperature.sg * 9) / 5 + 32,
      ];
      setWeatherData(tempUnit);
      setButtonText("°F");
    } else {
      setCurrentTempUnit("Celcius");
      tempUnit = [
        Math.round(data.days[0].airTemperature.sg),
        Math.round(data.days[1].airTemperature.sg),
        Math.round(data.days[2].airTemperature.sg),
        Math.round(data.days[3].airTemperature.sg),
        Math.round(data.days[4].airTemperature.sg),
        Math.round(data.days[5].airTemperature.sg),
        Math.round(data.days[6].airTemperature.sg),
      ];
      setWeatherData(tempUnit);
      setButtonText("°C");
    }
    console.log(tempUnit);
  }, [weatherData]);

  return (
    <div class="accordion" id="accordionExample">
      <label className="title">Forecast</label>

      <button
        class="btn btn-outline-light btn-sm"
        onClick={() => ToggleCToF({ weatherData })}
      >
        Toggle C to F
      </button>
      {/* Forecast 1 */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            {forecastDays[0]} {Math.round(data.days[0].airTemperature.sg)}°C{" "}
            {data.days[0].cloudCover.sg <= 25 ? (
              <img src="icons/01d.png" className="clouds" />
            ) : data.days[0].cloudCover.sg <= 50 ? (
              <img src="icons/02d.png" className="clouds" />
            ) : data.days[0].cloudCover.sg <= 75 ? (
              <img src="icons/03d.png" className="clouds" />
            ) : data.days[0].cloudCover.sg <= 100 ? (
              <img src="icons/04d.png" className="clouds" />
            ) : null}
          </button>
        </h2>

        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="city">{data.city}</p>
            <p className="temperature">
              {" "}
              {Math.round(data.days[0].airTemperature.sg)}°C
            </p>

            <p>
              {" "}
              <span className="parameter-label">Details</span>
            </p>
            <p>
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[0].airTemperature.sg)}°C
              </span>
            </p>
            <p>
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[0].windSpeed.sg)}m/s
              </span>
            </p>
            <p>
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[0].humidity.sg)}%
              </span>
            </p>
            <p>
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[0].pressure.sg)} hPa
              </span>
            </p>
            <p>
              <span className="parameter-label"></span>
              <span className="parameter-value">
                {" "}
                {weatherData[0]}
                {buttonText}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Forecast 2 */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            {forecastDays[1]} {Math.round(data.days[1].airTemperature.sg)}°C
            {"  "}
            {data.days[1].cloudCover.sg <= 25 ? (
              <img src="icons/01d.png" className="clouds" />
            ) : data.days[1].cloudCover.sg <= 50 ? (
              <img src="icons/02d.png" className="clouds" />
            ) : data.days[1].cloudCover.sg <= 75 ? (
              <img src="icons/03d.png" className="clouds" />
            ) : data.days[1].cloudCover.sg <= 100 ? (
              <img src="icons/04d.png" className="clouds" />
            ) : null}
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse "
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="city">{data.city}</p>
            <p className="temperature">
              {Math.round(data.days[1].airTemperature.sg)}°C
            </p>
            <p>
              {" "}
              <span className="parameter-label">Details</span>
            </p>
            <p>
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[1].airTemperature.sg)}°C
              </span>
            </p>
            <p>
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[1].windSpeed.sg)}m/s
              </span>
            </p>
            <p>
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[1].humidity.sg)}%
              </span>
            </p>
            <p>
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[1].pressure.sg)} hPa
              </span>
            </p>
            <p>
              <span className="parameter-label"></span>
              <span className="parameter-value">
                {" "}
                {weatherData[1]}
                {buttonText}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Forecast 3 */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            {forecastDays[2]}
            {"  "} {Math.round(data.days[2].airTemperature.sg)}°C{" "}
            {data.days[2].cloudCover.sg <= 25 ? (
              <img src="icons/01d.png" className="clouds" />
            ) : data.days[2].cloudCover.sg <= 50 ? (
              <img src="icons/02d.png" className="clouds" />
            ) : data.days[2].cloudCover.sg <= 75 ? (
              <img src="icons/03d.png" className="clouds" />
            ) : data.days[2].cloudCover.sg <= 100 ? (
              <img src="icons/04d.png" className="clouds" />
            ) : null}
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse "
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="city">{data.city}</p>
            <p className="temperature">
              {Math.round(data.days[2].airTemperature.sg)}°C
            </p>
            <p>
              {" "}
              <span className="parameter-label">Details</span>
            </p>
            <p>
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[2].airTemperature.sg)}°C
              </span>
            </p>
            <p>
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[2].windSpeed.sg)}m/s
              </span>
            </p>
            <p>
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[2].humidity.sg)}%
              </span>
            </p>
            <p>
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[2].pressure.sg)} hPa
              </span>
            </p>
            <p>
              <span className="parameter-label"></span>
              <span className="parameter-value">
                {" "}
                {weatherData[2]}
                {buttonText}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Forecast 4 */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            {forecastDays[3]}
            {"  "} {Math.round(data.days[3].airTemperature.sg)}°C{" "}
            {data.days[3].cloudCover.sg <= 25 ? (
              <img src="icons/01d.png" className="clouds" />
            ) : data.days[3].cloudCover.sg <= 50 ? (
              <img src="icons/02d.png" className="clouds" />
            ) : data.days[3].cloudCover.sg <= 75 ? (
              <img src="icons/03d.png" className="clouds" />
            ) : data.days[3].cloudCover.sg <= 100 ? (
              <img src="icons/04d.png" className="clouds" />
            ) : null}
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse "
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="city">{data.city}</p>
            <p className="temperature">
              {Math.round(data.days[3].airTemperature.sg)}°C
            </p>
            <p>
              {" "}
              <span className="parameter-label">Details</span>
            </p>
            <p>
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[3].airTemperature.sg)}°C
              </span>
            </p>
            <p>
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[3].windSpeed.sg)}m/s
              </span>
            </p>
            <p>
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[3].humidity.sg)}%
              </span>
            </p>
            <p>
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[3].pressure.sg)} hPa
              </span>
            </p>
            <p>
              <span className="parameter-label"></span>
              <span className="parameter-value">
                {" "}
                {weatherData[3]}
                {buttonText}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Forecast 5 */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            {forecastDays[4]}
            {"  "} {Math.round(data.days[4].airTemperature.sg)}°C{" "}
            {data.days[4].cloudCover.sg <= 25 ? (
              <img src="icons/01d.png" className="clouds" />
            ) : data.days[4].cloudCover.sg <= 50 ? (
              <img src="icons/02d.png" className="clouds" />
            ) : data.days[4].cloudCover.sg <= 75 ? (
              <img src="icons/03d.png" className="clouds" />
            ) : data.days[4].cloudCover.sg <= 100 ? (
              <img src="icons/04d.png" className="clouds" />
            ) : null}
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse "
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="city">{data.city}</p>
            <p className="temperature">
              {Math.round(data.days[4].airTemperature.sg)}°C
            </p>
            <p>
              {" "}
              <span className="parameter-label">Details</span>
            </p>
            <p>
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[4].airTemperature.sg)}°C
              </span>
            </p>
            <p>
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[4].windSpeed.sg)}m/s
              </span>
            </p>
            <p>
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[4].humidity.sg)}%
              </span>
            </p>
            <p>
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[4].pressure.sg)} hPa
              </span>
            </p>
            <p>
              <span className="parameter-label"></span>
              <span className="parameter-value">
                {" "}
                {weatherData[4]}
                {buttonText}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Forecast 6 */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            {forecastDays[5]}
            {"  "} {Math.round(data.days[5].airTemperature.sg)}°C{" "}
            {data.days[5].cloudCover.sg <= 25 ? (
              <img src="icons/01d.png" className="clouds" />
            ) : data.days[5].cloudCover.sg <= 50 ? (
              <img src="icons/02d.png" className="clouds" />
            ) : data.days[5].cloudCover.sg <= 75 ? (
              <img src="icons/03d.png" className="clouds" />
            ) : data.days[5].cloudCover.sg <= 100 ? (
              <img src="icons/04d.png" className="clouds" />
            ) : null}
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse "
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="city">{data.city}</p>
            <p className="temperature">
              {Math.round(data.days[5].airTemperature.sg)}°C
            </p>
            <p>
              {" "}
              <span className="parameter-label">Details</span>
            </p>
            <p>
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[5].airTemperature.sg)}°C
              </span>
            </p>
            <p>
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[5].windSpeed.sg)}m/s
              </span>
            </p>
            <p>
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[5].humidity.sg)}%
              </span>
            </p>
            <p>
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[5].pressure.sg)} hPa
              </span>
            </p>
            <p>
              <span className="parameter-label"></span>
              <span className="parameter-value">
                {" "}
                {weatherData[5]}
                {buttonText}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Forecast 7 */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
          <button
            class="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            {forecastDays[6]}
            {"  "} {Math.round(data.days[6].airTemperature.sg)}°C{" "}
            {data.days[6].cloudCover.sg <= 25 ? (
              <img src="icons/01d.png" className="clouds" />
            ) : data.days[6].cloudCover.sg <= 50 ? (
              <img src="icons/02d.png" className="clouds" />
            ) : data.days[6].cloudCover.sg <= 75 ? (
              <img src="icons/03d.png" className="clouds" />
            ) : data.days[6].cloudCover.sg <= 100 ? (
              <img src="icons/04d.png" className="clouds" />
            ) : null}
          </button>
        </h2>
        <div
          id="collapseSeven"
          class="accordion-collapse collapse "
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p className="city">{data.city}</p>
            <p className="temperature">
              {Math.round(data.days[6].airTemperature.sg)}°C
            </p>
            <p>
              {" "}
              <span className="parameter-label">Details</span>
            </p>
            <p>
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[6].airTemperature.sg)}°C
              </span>
            </p>
            <p>
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[6].windSpeed.sg)}m/s
              </span>
            </p>
            <p>
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[6].humidity.sg)}%
              </span>
            </p>
            <p>
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {" "}
                {Math.round(data.days[6].pressure.sg)} hPa
              </span>
            </p>
            <p>
              <span className="parameter-label"></span>
              <span className="parameter-value">
                {" "}
                {weatherData[6]}
                {buttonText}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
