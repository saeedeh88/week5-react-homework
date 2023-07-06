import React ,{useState} from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import "./Weather.css"

export default function Weather(props){
  const[weatherData,setWeatherData]=useState({ready:false});
  const[city,setCity]=useState(props.defaultCity);
  function handleResponse(response){
    console.log(response.data);
    setWeatherData(

    {
      ready:true,
      temperature:response.data.temperature.current,
      date:new Date(response.data.time*1000),
      wind:response.data.wind.speed,
      city:response.data.city,
      description:response.data.condition.description,
      humidity:response.data.temperature.humidity,
      iconUrl:response.data.condition.icon_url,
      
      
  }
    );
  }
  function search(){
const apiKey = "6d3703b72o71t1f333cdff4cea0c9774";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){

    event.preventDefault();
    search();
  }
  function handleCityChange(event){
    setCity(event.target.value);
    

  }
  if(weatherData.ready){
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
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
              <WeatherTemperature celcius={weatherData.temperature} />
                
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );}
    else{
      search();
    return"Loading...";
    
}
}