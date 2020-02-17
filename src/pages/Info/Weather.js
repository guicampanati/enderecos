import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Forecast from './Forecast';
import { useFormatDate } from '../../hooks';

const Weather = ({ address, addressData, addressWeather }) => {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const date = useFormatDate(addressWeather[0].dt_txt, options);

  return (
    <Container>
      <Div1>
        <Div2>
          <H3>{addressData.cep}</H3>
          <H3>{address.numero}</H3>
          {address.complemento && <H3>{address.complemento}</H3>}
          <H3>{addressData.logradouro}</H3>
          <H3>{addressData.bairro}</H3>
          <H3>{addressData.localidade}</H3>
          <H4>{date}</H4>

          <H2>{addressWeather[0].main.temp.toFixed()}ºC</H2>

          <P>{addressWeather[0].weather[0].description}</P>
          <Icon icon={addressWeather[0].weather[0].id} />

          {addressWeather.map((forecast, index) => (
            <Forecast key={index} forecast={forecast} />
          ))}
        </Div2>
      </Div1>
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
  margin-bottom: ${props => props.theme.spacing.s8};
  padding-left: ${props => props.theme.spacing.s3};
  padding-right: ${props => props.theme.spacing.s3};
  color: ${props => props.theme.color.gray.dark};
`;

const Div1 = styled.div`
  position: relative;
  margin-top: ${props => props.theme.spacing.s4};
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.lg};
  padding: ${props => props.theme.spacing.s6};
`;

const H2 = styled.h2`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.xl6};
  margin-top: ${props => props.theme.spacing.s4};
  margin-bottom: ${props => props.theme.spacing.s1};
`;

const H4 = styled.h4`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.base};
  margin-top: ${props => props.theme.spacing.s1};
  margin-bottom: ${props => props.theme.spacing.s1};
`;

const H3 = styled.h3`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.base};
  margin: 0;
`;

const P = styled.p`
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.base};
`;

export default Weather;
