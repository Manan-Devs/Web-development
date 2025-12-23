import Sun from '../assets/Sun.png';



function WeatherWidget() {
      return ( 
          <div className="weather-container"
                <h1>Weather</h1>
            
            <div className="weatherData">
                 <img src={Sun} alt="Sun.png" />
                  <h2>25</h2>
            </div>

            <div className="location">
                 <h2>London</h2>
                 <p>Sunny,clear</p>
            </div>
          </div>
      )
}


export default WeatherWidget;