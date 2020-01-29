import { useState, useEffect } from 'react';
import addressService from '../services/addresses';

const useAddress = id => {
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

export default useAddress;
