import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../svg/Logo';

const Navigation = () => (
  <Header>
    <LinkLogo to={'/'}>
      <Logo />
      <span>Endereços</span>
    </LinkLogo>
  </Header>
);

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.color.gray.dark};
  padding: ${props => props.theme.spacing.s3};
`;

const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.xl3};
  color: ${props => props.theme.color.gray.light};
  fill: ${props => props.theme.color.gray.light};
  text-decoration: none;
  svg {
    margin-right: ${props => props.theme.spacing.s3};
  }
  &:hover {
    color: ${props => props.theme.color.white};
    fill: ${props => props.theme.color.white};
  }
`;

export default Navigation;
