import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Weather from './Weather';
import Distance from './Distance';
import {
  useAddress,
  useUserCoords,
  useAddressData,
  useAddressCoords,
  useAddressWeather
} from '../../hooks';
import Directions from './Directions';

const Info = () => {
  const { id } = useParams();
  const address = useAddress(id);
  const addressData = useAddressData(address);
  const userCoords = useUserCoords();
  const addressCoords = useAddressCoords(address, addressData);
  const addressWeather = useAddressWeather(addressCoords);

  return (
    <>
      <Container>
        {addressWeather && (
          <Weather
            address={address}
            addressData={addressData}
            addressWeather={addressWeather}
          />
        )}
      </Container>
      <Div>
        <Distance userCoords={userCoords} addressCoords={addressCoords} />

        <Directions userCoords={userCoords} addressCoords={addressCoords} />
      </Div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: auto;
  margin: auto;
  margin-top: ${props => props.theme.spacing.s4};
  width: ${props => props.theme.width.full};

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: ${props => props.theme.screen.sm};
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: ${props => props.theme.screen.md};
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: ${props => props.theme.screen.lg};
  }

  @media (min-width: ${props => props.theme.screen.xl}) {
    max-width: ${props => props.theme.screen.xl};
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.s4};
`;

export default Info;
