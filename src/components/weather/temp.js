// https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=a03939069bac22bc434130fce49817d4



import React, {useEffect, useState} from 'react';
import Weathercard from './weathercard';
import "./style.css";

const Temp = () => {

 const [searchValue, setSearchValue] = useState("pune");
 const [tempInfo, setTempInfo] = useState("");
 
 const getWeatherInfo = async () => {
  try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a03939069bac22bc434130fce49817d4`

    const res = await fetch(url);
    const data = await res.json();

    const { temp, humidity, pressure } = data.main;
    const { main:weathermood } = data.weather[0];
    const { name } = data
    const { speed } = data.wind
    const { country, sunset } = data.sys;


    const myNewWeatherInfo ={
      temp, 
      humidity, 
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset
     }

     setTempInfo(myNewWeatherInfo)
  

    console.log(data)
  } catch(error) {
    console.log(error);
  }
 };
  
 
 useEffect(() => {
    getWeatherInfo()

    },[])
 
 
  
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value) }
          />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      {/* our temp card */}
      <Weathercard tempInfo={tempInfo} />
      
     </>
  );
};

export default Temp;
