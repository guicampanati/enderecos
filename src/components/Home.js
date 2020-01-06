import React, { useState, useEffect } from 'react';
import List from './Address/List';
import addressService from '../services/addresses';

const Home = () => {
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    const addressList = addressService.getAll();
    if (addressList) {
      setAddresses(addressList);
    }
  }, []);

  return <List addresses={addresses} />;
};

export default Home;
