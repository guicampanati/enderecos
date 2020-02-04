import React from 'react';
import styled from 'styled-components';
import Address from './Address';
import { useAddressList } from '../../hooks';

const Home = () => {
  const addresses = useAddressList();

  return (
    <Container>
      {addresses &&
        addresses.map(address => (
          <Address key={address.id} address={address} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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

export default Home;
