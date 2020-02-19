import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import StaticMap from './StaticMap';
import { useAddressData, useAddressCoords } from '../../hooks';

const Address = ({ address }) => {
  const addressData = useAddressData(address);
  const addressCoords = useAddressCoords(address, addressData);

  return (
    <Container id="home-address">
      <Link to={`/${address.id}`}>
        <StaticMap addressCoords={addressCoords} />

        {addressData ? (
          <Div1>
            <Div2>
              <H4 id="home-address-cep">{address.cep}</H4>

              <H3 id="home-address-main">
                {addressData.logradouro}, {address.numero}
                {address.complemento && <span>/{address.complemento}</span>}
              </H3>

              <Span id="home-address-section">
                {addressData.bairro}, {addressData.localidade} -{' '}
                {addressData.uf}
              </Span>
            </Div2>
          </Div1>
        ) : (
          <Loading />
        )}
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.width.full};
  @media (min-width: ${props => props.theme.screen.md}) {
    width: ${props => props.theme.width.w1_2};
  }
  @media (min-width: ${props => props.theme.screen.lg}) {
    width: ${props => props.theme.width.w1_3};
  }
  margin-bottom: ${props => props.theme.spacing.s8};
  padding-left: ${props => props.theme.spacing.s3};
  padding-right: ${props => props.theme.spacing.s3};
`;

const Div1 = styled.div`
  position: relative;
  padding-left: ${props => props.theme.spacing.s4};
  padding-right: ${props => props.theme.spacing.s4};
  margin-top: -${props => props.theme.spacing.s16};
`;

const Div2 = styled.div`
  background-color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.lg};
  padding: ${props => props.theme.spacing.s6};
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

const H4 = styled.h4`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.lg};
  margin-top: ${props => props.theme.spacing.s1};
  margin-bottom: ${props => props.theme.spacing.s1};
  color: ${props => props.theme.color.gray.dark};
`;

const Span = styled.span`
  color: ${props => props.theme.color.gray.medium};
  font-size: ${props => props.theme.fontSize.sm};
`;

export default Address;
