import React from 'react';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import { LOCATIONIQ_API_KEY } from '../../hooks';

const StaticMap = ({ addressCoords }) => (
  <>
    {addressCoords ? (
      <Div>
        <Img
          src={`https://maps.locationiq.com/v2/staticmap?key=${LOCATIONIQ_API_KEY}&center=${addressCoords.latitude}%2C${addressCoords.longitude}&zoom=12&markers=icon:small-blue-cutout|${addressCoords.latitude}%2C${addressCoords.longitude}`}
          alt="mapa endereço"
        />
      </Div>
    ) : (
      <Loading />
    )}
  </>
);

const Div = styled.div`
  position: relative;
  padding-bottom: ${props => props.theme.width.w5_6};
`;

const Img = styled.img`
  position: absolute;
  width: ${props => props.theme.width.full};
  height: ${props => props.theme.height.full};
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.md};
`;

export default StaticMap;
