import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { LOCATIONIQ_API_KEY } from '../../hooks';

const StaticMap = ({ address, addressCoords }) => (
  <>
    {addressCoords ? (
      <Div>
        <Link to={`/${address.id}`}>
          <Img
            src={`https://maps.locationiq.com/v2/staticmap?key=${LOCATIONIQ_API_KEY}&center=${addressCoords.latitude},${addressCoords.longitude}&zoom=18&markers=icon:small-blue-cutout|${addressCoords.latitude},${addressCoords.longitude}`}
            alt="mapa endereço"
          />
        </Link>
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
