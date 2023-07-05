import React ,{useState} from "react";
import axios from "axios";
import "./Weather.css"
export default function Weather(props){
  
  const[weatherData,setWeatherData]=useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData(

    {
      ready:true,
      temperature:response.data.temperature.current,
      date:"Wednesday 7:00",
      wind:response.data.wind.speed,
      city:response.data.city,
      description:response.data.condition.description,
      humidity:response.data.temperature.humidity,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  }
    );
  }
  if(weatherData.ready){
    return(
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              {" "}
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              ></img>
              <div className="float-left">
                <span className="temperature float-left">{Math.round(weatherData.temperature)}</span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );}
    else{
      const apiKey = "6d3703b72o71t1f333cdff4cea0c9774";
  
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
    return"Loading...";
}
}