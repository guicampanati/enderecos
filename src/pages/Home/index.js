import React from 'react';
import styled from 'styled-components';
import Address from './Address';
import Button from '../../components/Button';
import { useAddressList } from '../../hooks';

const Home = () => {
  const addresses = useAddressList();

  return (
    <Container>
      {addresses &&
        addresses.map(address => (
          <Address key={address.id} address={address} />
        ))}
      {addresses && addresses.length === 0 && (
        <Div>
          <H3>Lista vazia.</H3>
          <Button to={'/criar'}>Criar Endereço</Button>
        </Div>
      )}
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.xl2};
  margin-top: ${props => props.theme.spacing.s1};
  margin-bottom: ${props => props.theme.spacing.s1};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.25;
  color: ${props => props.theme.color.gray.dark};
`;

export default Home;
