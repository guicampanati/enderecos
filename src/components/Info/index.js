import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Card from '../Card';
import { useAddress } from '../../hooks';
import Detail from './Detail';
import Map from './Map';
import Weather from './Weather';
import Distance from './Distance';

const Info = () => {
  const [userCoords, setUserCoords] = useState(null);
  const { id } = useParams();
  const address = useAddress(id);

  useEffect(() => {
    // Adquirindo posição do usuário
    try {
      window.navigator.geolocation.getCurrentPosition(pos =>
        setUserCoords(pos.coords)
      );
    } catch {
      setUserCoords(false);
    }
  }, []);

  return (
    <Container>
      {address && (
        <Card.Wrapper>
          <Detail address={address} />

          <Map address={address} />

          <Weather address={address} />

          {userCoords ? (
            <Distance userCoords={userCoords} address={address} />
          ) : (
            <span>Geolocalização não disponível</span>
          )}
        </Card.Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Info;
