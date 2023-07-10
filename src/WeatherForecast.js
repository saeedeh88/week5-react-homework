import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
  function handleResponse(response){
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "6d3703b72o71t1f333cdff4cea0c9774";
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
           
        
              icon
            
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperaturesMax">19°</span>
              <span className="WeatherForecast-temperatureMin">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}