import { useState, useEffect } from 'react';
import addressService from '../services/addresses';
import viacep from '../services/viacep';
import locationiq from '../services/locationiq';
import openweather from '../services/openweather';

export const useAddress = id => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const addressToReturn = addressService
      .getAll()
      .find(address => address.id === id);

    if (addressToReturn) {
      setAddress(addressToReturn);
    }
  }, [id]);

  return address;
};

export const useAddressData = address => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    if (address) {
      viacep.get(`${address.cep}/json`).then(response => {
        setAddressData(response.data);
      });
    }
  }, [address]);

  return addressData;
};

export const useUserCoords = () => {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    // Adquirindo posição do usuário
    try {
      window.navigator.geolocation.getCurrentPosition(pos =>
        setUserCoords(pos.coords)
      );
    } catch {
      setUserCoords(false);
    }
  }, []);

  return userCoords;
};

export const useAddressCoords = (address, addressData) => {
  const [addressCoords, setAddressCoords] = useState(null);
  const LOCATIONIQ_API_KEY = 'pk.46077fc7923e32dabf8eaee20c030b63';

  useEffect(() => {
    if (addressData) {
      const { numero, cep } = address;
      const { logradouro, bairro, localidade } = addressData;

      locationiq
        .get(
          `search.php?key=${LOCATIONIQ_API_KEY}&q=${logradouro},${numero},${bairro},${localidade},${cep},Brazil&format=json`
        )
        .then(response =>
          setAddressCoords({
            latitude: response.data[0].lat,
            longitude: response.data[0].lon
          })
        );
    }
  }, [address, addressData]);

  return addressCoords;
};

export const useAddressWeather = addressCoords => {
  const [addressWeather, setAddressWeather] = useState(null);
  const OPENWEATHER_API_KEY = 'c8606fd98812085499b9669c638e9ed0';

  useEffect(() => {
    if (addressCoords) {
      openweather
        .get(
          `weather?lat=${addressCoords.latitude}&lon=${addressCoords.longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`
        )
        .then(response => setAddressWeather(response.data));
    }
  }, [addressCoords]);

  return addressWeather;
};
