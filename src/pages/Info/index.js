import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import {
  useAddress,
  useUserCoords,
  useAddressData,
  useAddressCoords,
  useAddressWeather
} from '../../hooks';
import Detail from './Detail';
import Map from './Map';
import Weather from './Weather';
import Distance from './Distance';

const Info = () => {
  const { id } = useParams();
  const address = useAddress(id);
  const addressData = useAddressData(address);
  const userCoords = useUserCoords();
  const addressCoords = useAddressCoords(address, addressData);
  const addressWeather = useAddressWeather(addressCoords);

  return (
    <Container>
      <Card.Wrapper>
        <Detail address={address} addressData={addressData} />

        <Map addressCoords={addressCoords} />

        <Weather addressWeather={addressWeather} />

        <Distance userCoords={userCoords} addressCoords={addressCoords} />
      </Card.Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Info;
