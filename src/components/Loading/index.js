import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const Loading = () => (
  <Container className="loading">
    <Spinner />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.s12};
  margin: ${props => props.theme.spacing.s8};
`;

export default Loading;
