import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../svg/Logo';
import CreateAddress from './CreateAddress';

const Navigation = () => (
  <Header>
    <LinkLogo to={'/'}>
      <Logo />
      <span>Endereços</span>
    </LinkLogo>
    <CreateAddress />
  </Header>
);

const Header = styled.header`
  background-color: ${props => props.theme.color.gray.dark};
  padding: ${props => props.theme.spacing.s3};

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
