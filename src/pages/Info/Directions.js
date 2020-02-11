import React from 'react';
import styled from 'styled-components';

const Directions = ({ userCoords, addressCoords }) => (
  <>
    {userCoords && addressCoords && (
      <A
        href={`https://www.google.com/maps/dir/?api=1&origin=${userCoords.latitude},${userCoords.longitude}&destination=${addressCoords.latitude},${addressCoords.longitude}`}
        target="_blank"
      >
        Como Chegar?
      </A>
    )}
  </>
);

const A = styled.a`
  font-size: ${props => props.theme.fontSize.sm};
`;

export default Directions;
