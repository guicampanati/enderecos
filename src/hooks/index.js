import { useState, useEffect, useLayoutEffect } from 'react';
import addressService from '../services/addresses';
import viacep from '../services/viacep';
import locationiq from '../services/locationiq';
import openweather from '../services/openweather';

export const LOCATIONIQ_API_KEY = 'pk.46077fc7923e32dabf8eaee20c030b63';
export const OPENWEATHER_API_KEY = 'c8606fd98812085499b9669c638e9ed0';

export const useAddressList = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const addressList = addressService.getAll();
    if (addressList) {
      setAddresses(addressList);
    }
  }, []);

  return addresses;
};

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

  useEffect(() => {
    if (addressData) {
      const { cep, coords, id } = address;
      const { logradouro, localidade } = addressData;

      if (coords) {
        setAddressCoords({
          latitude: coords.latitude,
          longitude: coords.longitude
        });
      } else {
        locationiq
          .get(
            `search.php?key=${LOCATIONIQ_API_KEY}&postalcode=${cep}&street=${logradouro}&city=${localidade}&country=Brazil&format=json`
          )
          .then(response => {
            const coords = {
              latitude: response.data[0].lat,
              longitude: response.data[0].lon
            };

            setAddressCoords(coords);

            addressService.update(id, { ...address, coords });
          });
      }
    }
  }, [address, addressData]);

  return addressCoords;
};

export const useAddressWeather = addressCoords => {
  const [addressWeather, setAddressWeather] = useState(null);

  useEffect(() => {
    if (addressCoords) {
      openweather
        .get(
          `forecast?lat=${addressCoords.latitude}&lon=${addressCoords.longitude}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=pt_br`
        )
        .then(response => {
          // extrair primeiro horário retornado
          // formato 2020-02-11 21:00:00
          const first_hour = response.data.list[0].dt_txt.slice(-8);

          // filtrar lista de resultados de 5 dias / 3 horas para 5 dias
          // https://openweathermap.org/forecast5
          const forecast = response.data.list.filter(result =>
            result.dt_txt.includes(first_hour)
          );

          setAddressWeather(forecast);
        });
    }
  }, [addressCoords]);

  return addressWeather;
};

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

export const useFormatDate = (dt_txt, options) => {
  const [dateFormatted, setDateFormatted] = useState('');

  useEffect(() => {
    // Formatar data para formato válido
    // https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15
    const dataString = dt_txt.replace(' ', 'T');
    const date = new Date(dataString).toLocaleDateString('pt-BR', options);
    setDateFormatted(date);
  }, [dt_txt, options]);

  return dateFormatted;
};
