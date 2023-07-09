import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(){
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