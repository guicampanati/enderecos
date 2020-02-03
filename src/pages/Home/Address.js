import React from 'react';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import StaticMap from './StaticMap';
import { useAddressData, useAddressCoords } from '../../hooks';

const ListItem = ({ address }) => {
  const addressData = useAddressData(address);
  const addressCoords = useAddressCoords(address, addressData);

  return (
    <Container>
      <StaticMap address={address} addressCoords={addressCoords} />

      {addressData ? (
        <Div1>
          <Div2>
            <H4>{address.cep}</H4>

            <H3>
              {addressData.logradouro}, {address.numero}
              {address.complemento && <span>/{address.complemento}</span>}
            </H3>

            <Span>
              {addressData.bairro}, {addressData.localidade} - {addressData.uf}
            </Span>
          </Div2>
        </Div1>
      ) : (
        <Loading />
      )}
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
`;

const H4 = styled.h4`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.lg};
  margin-top: ${props => props.theme.spacing.s1};
  margin-bottom: ${props => props.theme.spacing.s1};
`;

const Span = styled.span`
  color: ${props => props.theme.color.gray.medium};
  font-size: ${props => props.theme.fontSize.sm};
`;

export default ListItem;
