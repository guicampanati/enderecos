import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.lg};
  margin: auto;
  margin-top: ${props => props.theme.spacing.s4};
  padding: ${props => props.theme.spacing.s8};
  max-width: 20rem;
`;

export default Container;
