import React from 'react';

const Icon = ({ icon }) => (
  <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
);

export default Icon;
