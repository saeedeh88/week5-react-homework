import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded,setLoaded]=useState(false);
  let [forecast,setForecast]=useState(null);
  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  
    if(loaded){
      console.log(forecast);
      return (
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
             <WeatherForecastDay data={forecast[0]}/>
            </div>
          </div>
        </div>
      );

    }else{

   let apiKey = "6d3703b72o71t1f333cdff4cea0c9774";
   let lon = props.coordinates.longitude;
   let lat = props.coordinates.latitude;
   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   return null; }
}