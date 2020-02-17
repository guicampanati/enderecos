import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { useFormatDate } from '../../hooks';

const Forecast = ({ forecast }) => {
  const options = {
    weekday: 'long',
    day: 'numeric'
  };
  const date = useFormatDate(forecast.dt_txt, options);

  return (
    <Container>
      <Div>{date}</Div>
      <Div>
        <Div>{forecast.main.temp.toFixed()}ºC</Div>
        <Icon icon={forecast.weather[0].id} />
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.theme.width.full};
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.spacing.s2};
`;

export default Forecast;
