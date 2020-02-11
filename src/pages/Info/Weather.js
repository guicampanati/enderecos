import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Weather = ({ forecast }) => (
  <Div>
    <H4>
      {new Date(forecast.dt_txt).toLocaleDateString('pt-BR', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      })}
    </H4>
    <H2>{forecast.main.temp.toFixed()}ºC</H2>
    <P>{forecast.weather[0].description}</P>

    <Icon icon={forecast.weather[0].icon} />
  </Div>
);

const Div = styled.div`
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
  font-size: ${props => props.theme.fontSize.xl4};
  margin-top: ${props => props.theme.spacing.s4};
  margin-bottom: ${props => props.theme.spacing.s1};
`;

const H4 = styled.h4`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.base};
  margin-top: ${props => props.theme.spacing.s1};
  margin-bottom: ${props => props.theme.spacing.s1};
  color: ${props => props.theme.color.gray.dark};
`;

const P = styled.p`
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.base};
`;

export default Weather;
