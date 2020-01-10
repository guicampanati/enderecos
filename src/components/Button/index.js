import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Container';

const Button = styled(Link)`
  color: ${props => props.theme.color.white};
  font-weight: ${props => props.theme.fontWeight.bold};
  padding-top: ${props => props.theme.spacing.s2};
  padding-bottom: ${props => props.theme.spacing.s2};
  padding-left: ${props => props.theme.spacing.s4};
  padding-right: ${props => props.theme.spacing.s4};
  border-radius: ${props => props.theme.borderRadius.default};
  border-width: 1px;
  text-decoration: none;

  border-color: ${props => props.theme.color.blue.dark};
  background-color: ${props => props.theme.color.blue.light};
  &:hover {
    border-color: transparent;
    background-color: ${props => props.theme.color.blue.dark};
  }
`;

Button.Container = Container;

export default Button;
