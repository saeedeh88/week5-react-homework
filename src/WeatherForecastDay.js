import React from "react";
export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature=Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }
    function minTemperature() {
      let temperature = Math.round(props.data.temperature.minimum);
      return `${temperature}°`;
    }
    function day(){
        let date=new Date(props.data.time *1000);
        let day=date.getDay();
        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        return days[day];
    }
return (
   <div> <div className="WeatherForecast-day">{day()}</div>
             <div> <img
                src={props.data.condition.icon_url}
                alt={props.data.condition.description}
                className="float-left"
              ></img></div>
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperaturesMax">
                  {maxTemperature()}
                </span>
                <span className="WeatherForecast-temperatureMin">
                  {minTemperature()}
                </span>
              </div>
              </div>);
}