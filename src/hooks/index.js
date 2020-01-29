import { useState, useEffect } from 'react';
import addressService from '../services/addresses';
import viacep from '../services/viacep';

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

export const useAddressData = cep => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    viacep.get(`${cep}/json`).then(response => {
      setAddressData(response.data);
    });
  }, [cep]);

  return addressData;
};
