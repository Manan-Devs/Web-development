// import { useEffect, useState } from "react";

// import Sun from '../assets/Sun.png';





// function WeatherWidget() {
//       const [weather, setWeather] = useState(null);
//       const [loading, setLoading] = useState(true);

//       useEffect(() => {
//     async function fetchWeather() {
//       try {
//         const API_KEY = "";
//         const city = "London";

//         const response = await fetch(
//       //     ``
//         );

//         const data = await response.json();
//         setWeather(data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     }

//     fetchWeather();
//   }, []);

//       return (  
//           <div className="weather-container">
//                 <h1>Weather</h1>
            
//             <div className="weatherData">
//                  <img src={Sun} alt="Sun.png" />
//                   <h2>25</h2>
//             </div>

//             <div className="location">
//                  <h2>{weather?.name}</h2>
//                  <p>{weather?.weather[0]?.description}</p>
//             </div>
//           </div>
//       )
// }


// export default WeatherWidget;