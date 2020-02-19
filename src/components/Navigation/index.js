import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../svg/Logo';
import Hamburger from '../../svg/Hamburger';
import Close from '../../svg/Close';
import { useWindowSize } from '../../hooks';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  return (
    <Nav>
      <LinkLogo to={'/'} id="link-logo">
        <Logo />
        <span>Endereços</span>
      </LinkLogo>

      <HamburgerMenu>
        <HamburgerButton type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <Hamburger />}
        </HamburgerButton>
      </HamburgerMenu>

      {(size[0] > 640 || isOpen) && (
        <>
          <Menu>
            <MenuItems>
              <Link to={'/'} id="list-addresses">
                Listar Endereços
              </Link>
            </MenuItems>
          </Menu>

          <div>
            <LinkCreate to="/criar" id="add-address">
              Adicionar Endereço
            </LinkCreate>
          </div>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${props => props.theme.color.gray.dark};
  padding: ${props => props.theme.spacing.s6};
`;

const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.xl3};
  color: ${props => props.theme.color.gray.light};
  fill: ${props => props.theme.color.gray.light};
  text-decoration: none;
  letter-spacing: -0.025em;
  margin-right: ${props => props.theme.spacing.s6};

  svg {
    width: ${props => props.theme.spacing.s8};
    height: ${props => props.theme.spacing.s8};
    margin-right: ${props => props.theme.spacing.s3};
    fill: currentColor;
  }

  &:hover {
    color: ${props => props.theme.color.white};
    fill: ${props => props.theme.color.white};
  }
`;

const HamburgerMenu = styled.div`
  display: block;

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.s2};
  color: ${props => props.theme.color.gray.light};
  background-color: ${props => props.theme.color.gray.dark};
  border-radius: ${props => props.theme.borderRadius.default};
  border-color: ${props => props.theme.color.gray.light};
  border-width: 1px;

  &:hover {
    color: ${props => props.theme.color.white};
    border-color: ${props => props.theme.color.white};
  }

  svg {
    width: ${props => props.theme.spacing.s5};
    height: ${props => props.theme.spacing.s5};
    fill: currentColor;
  }
`;

const Menu = styled.div`
  width: ${props => props.theme.width.full};
  display: block;
  flex-grow: 1;

  @media (min-width: ${props => props.theme.screen.sm}) {
    display: flex;
    align-items: center;
    width: auto;
  }
`;

const MenuItems = styled.div`
  font-size: ${props => props.theme.fontSize.sm};

  @media (min-width: ${props => props.theme.screen.sm}) {
    flex-grow: 1;
  }

  a {
    display: block;
    margin-top: ${props => props.theme.spacing.s4};
    margin-right: ${props => props.theme.spacing.s4};
    color: ${props => props.theme.color.gray.light};

    @media (min-width: ${props => props.theme.screen.sm}) {
      display: inline-block;
      margin-top: 0;
    }

    &:hover {
      color: ${props => props.theme.color.white};
    }
  }
`;

const LinkCreate = styled(Link)`
  display: inline-block;
  font-size: ${props => props.theme.fontSize.sm};
  padding: ${props => props.theme.spacing.s2};
  line-height: 1;
  border-radius: ${props => props.theme.borderRadius.default};
  border-color: ${props => props.theme.color.gray.light};
  border-width: 1px;
  color: ${props => props.theme.color.gray.light};
  margin-top: ${props => props.theme.spacing.s4};

  @media (min-width: ${props => props.theme.screen.sm}) {
    margin-top: 0;
  }

  &:hover {
    background-color: ${props => props.theme.color.gray.light};
    color: ${props => props.theme.color.gray.dark};
    border-color: transparent;
  }

  svg {
    fill: currentColor;
    margin-right: ${props => props.theme.spacing.s2};
  }
`;

export default Navigation;
