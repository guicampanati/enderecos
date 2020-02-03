import React from 'react';

const Weather = ({ addressWeather }) => (
  <>
    {addressWeather && (
      <>
        <div>Temperatura: {addressWeather.main.temp.toFixed()}ºC</div>
        <div>
          Sensação térmica: {addressWeather.main.feels_like.toFixed()}ºC
        </div>
        <div>Mínima: {addressWeather.main.temp_min.toFixed()}ºC</div>
        <div>Máxima: {addressWeather.main.temp_max.toFixed()}ºC</div>
        <div>Pressão: {addressWeather.main.pressure}hPa</div>
        <div>Umidade: {addressWeather.main.humidity}%</div>
      </>
    )}
  </>
);

export default Weather;
