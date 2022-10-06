import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const WeatherApp = () => {
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");
    const [city, setCity] = useState("Bangalore");
    const [country, setCountry] = useState("India");
  
    const getWeatherData = (city, country) => {
      axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=2697c3023a8174e044842fc8f586e057` ,
      })
      

        .then((response) => {
          console.log(response.data.main.temp);
      
          setTemperature(response.data.main.temp - 273.15);
          
          setDesc(response.data.weather[0].main);
        })
        .catch((error) => {
          console.log(error);
        });
    };
return (
    <><center>
      <div class="box1">
        Check The Curent Weather od Your Location
      </div>
      </center>
      <br />
      <div style={{ marginLeft: "33%" }}>
        <div class="box2"
        >
          {new Date().toLocaleString()}
          <br />
          {city} Weather
          <br />
         
          {Math.round(temperature * 100) / 100} ℃ - {desc}
        </div>
        <br />
        <br />
        <br />
        <div class="center">
        City: 
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        /><br />
        Country: 
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br/>
        <button class="button"
          onClick={() => {
            getWeatherData(city, country);
          }}
        >
          GET
        </button>
        </div>
      </div>
    </>
  );
        };
export default WeatherApp