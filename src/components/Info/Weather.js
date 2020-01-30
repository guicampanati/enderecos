import React from 'react';
import {
  useAddressData,
  useAddressCoords,
  useAddressWeather
} from '../../hooks';

const Weather = ({ address }) => {
  const addressData = useAddressData(address.cep);
  const addressCoords = useAddressCoords(address, addressData);
  const addressWeather = useAddressWeather(addressCoords);

  return (
    <>
      {addressWeather && (
        <>
          <div>Temperatura: {addressWeather.main.temp}ºC</div>
          <div>Sensação térmica: {addressWeather.main.feels_like}ºC</div>
          <div>Mínima: {addressWeather.main.temp_min}ºC</div>
          <div>Máxima: {addressWeather.main.temp_max}ºC</div>
          <div>Pressão: {addressWeather.main.pressure}hPa</div>
          <div>Umidade: {addressWeather.main.humidity}%</div>
        </>
      )}
    </>
  );
};

export default Weather;
