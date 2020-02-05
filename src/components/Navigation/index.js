import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CreateAddress from './CreateAddress';
import Logo from '../../svg/Logo';
import Hamburger from '../../svg/Hamburger';
import Close from '../../svg/Close';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <Div>
        <LinkLogo to={'/'}>
          <Logo />
          <span>Endereços</span>
        </LinkLogo>
        <Menu>
          <Button type="button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Close /> : <Hamburger />}
          </Button>
        </Menu>
      </Div>
      {isOpen && (
        <Nav>
          <CreateAddress />
        </Nav>
      )}
    </Header>
  );
};

const Header = styled.header`
  background-color: ${props => props.theme.color.gray.dark};
  padding: ${props => props.theme.spacing.s3};

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.s3};

  @media (min-width: ${props => props.theme.screen.sm}) {
    padding: 0;
  }
`;

const Menu = styled.div`
  @media (min-width: ${props => props.theme.screen.sm}) {
    display: none;
  }

  svg {
    width: ${props => props.theme.spacing.s6};
    height: ${props => props.theme.spacing.s6};
    fill: currentColor;
  }
`;

const Button = styled.div`
  display: block;
  color: ${props => props.theme.color.gray.light};

  &:hover {
    color: ${props => props.theme.color.white};
  }

  &:focus {
    color: ${props => props.theme.color.white};
    outline: none;
  }
`;

const Nav = styled.nav`
  @media (min-width: ${props => props.theme.screen.sm}) {
    display: none;
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
