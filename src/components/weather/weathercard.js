import React, {useState, useEffect} from 'react'

const Weathercard = ({tempInfo}) => {
    
    const [weatherState, setWeatherState] = useState("");


    const {
        temp, 
        humidity, 
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      } = tempInfo
      
//converting the seconds
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`


  useEffect(() => {
      if(weathermood){
        switch(weathermood) {
            case "Clouds": 
              setWeatherState("wi-day-cloudy")
              break;
            case "Haze": 
              setWeatherState("wi-fog")
              break;
            case "Clear": 
              setWeatherState("wi-day-sunny")
              break;
              case "Mist": 
              setWeatherState("wi-dust")
              break;
              case "Rain":
              setWeatherState("wi wi-rain")
              break;
              
            
            default:
                setWeatherState("wi-day-sunny")
                break;
        }
      }
  }, [weathermood]);


  return (
    <>
     <article className='widget'>
          <div className="weatherIcon">
            <i className={`wi ${weatherState}`}></i>
          </div>  
              <div className="weatherInfo">
                <div className="temperature">
                  <span>{temp}&deg;</span>
                </div>
                <div className="description">
                <div className="weatherCondition">{weathermood}</div>
                <div classname="place">{name}, {country}</div>
              
                </div>
             </div>
             <div className="date"> {new Date().toLocaleString()} </div>
             {/* our four divided sessions */}
             <div className="extra-temp">
              <div className="temp-info-minmax">
                <div className="two-sided-section">
                  <p><i className={"wi wi-sunset"}></i></p>
                  <p className="extra-info-leftside">{timeStr}<br/>
                                                      sunset</p>
                </div>
                <div className="two-sided-section">
                  <p><i className={"wi wi-humidity"}></i></p>
                  <p className="extra-info-leftside">{humidity}<br/>
                                                      Humidity</p>
                </div>
              </div>
                <div className="weather-extra-info">
                <div className="two-sided-section">
                  <p><i className={"wi wi-rain"}></i></p>
                  <p className="extra-info-leftside">{pressure}<br/>
                                                     pressure</p>
                </div>
                <div className="two-sided-section">
                  <p><i className={"wi wi-strong-wind"}></i></p>
                  <p className="extra-info-leftside">{speed}<br/>
                                                      Speed</p>
                </div>


                </div>
             </div>
       </article>
      
    </>
  )
}

export default Weathercard
