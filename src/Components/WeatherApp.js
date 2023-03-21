// import React from "react";
// // import "./WeatherApp.css";

// // Create a WeatherApp component to render the app
// const WeatherApp = () => {
//   // return <AsyncPaginate />;
//   // Create a state to store the weather data
//   const [weatherData, SetWeatherData] = React.useState([]);
//   // };

//   const lat = 58.7984;
//   const lng = 17.8081;
//   const params = "windSpeed";

//   function WeatherData() {
//     const FetchWeatherData = async () => {
//       const response = await fetch(
//         `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
//         {
//           headers: {
//             Authorization:
//               "7a1fd7d2-b517-11ed-bc36-0242ac130002-7a1fd840-b517-11ed-bc36-0242ac130002",
//           },
//         },

//         // Use useEffect Hook to run the fetchWeatherData function
//         React.useEffect(() => {
//           FetchWeatherData();
//         }, [])
//       )
//         .then((response) => response.json())
//         .then((jsonData) => {
//           // Do something with response data.
//         });
//       const json = await response.json();
//       FetchWeatherData(json.list);
//     };
//   }

//   // Create a function to render the weather data
//   function render() {
//     const renderWeatherData = () => {
//       return WeatherData.map((data) => {
//         const date = new Date(data.dt * 1000);
//         const day = date.get;
//       });
//     };
//   }
// };
// export default WeatherApp;
