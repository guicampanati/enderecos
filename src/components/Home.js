import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CreateItem from './Address/CreateItem';
import ListItem from './Address/ListItem';
import addressService from '../services/addresses';

const Home = () => {
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    const addressList = addressService.getAll();
    if (addressList) {
      setAddresses(addressList);
    }
  }, []);

  return (
    <Container>
      <CreateItem />
      {addresses &&
        addresses.map(address => (
          <ListItem key={address.id} address={address} />
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
