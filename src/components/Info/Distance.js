import React from 'react';
import { getDistanceBetween } from 'geolocation-distance-between';
import { useAddressData, useAddressCoords } from '../../hooks';

const Distance = ({ userCoords, address }) => {
  const addressData = useAddressData(address.cep);
  const addressCoords = useAddressCoords(address, addressData);

  return (
    <>
      {addressCoords && (
        <>
          {getDistanceBetween(userCoords, addressCoords).toFixed(2)}km distante
          de você.
        </>
      )}
    </>
  );
};

export default Distance;
