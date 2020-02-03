import React from 'react';
import { getDistanceBetween } from 'geolocation-distance-between';

const Distance = ({ userCoords, addressCoords }) => (
  <>
    {userCoords && addressCoords && (
      <span>
        {getDistanceBetween(userCoords, addressCoords).toFixed(2)}km distante de
        você.
      </span>
    )}
  </>
);

export default Distance;
