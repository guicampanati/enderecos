import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Add from '../../svg/Add';

const CreateItem = () => (
  <LinkAdd to="/criar">
    <Add />
    <div>Adicionar Endereço</div>
  </LinkAdd>
);

const LinkAdd = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.spacing.s2};
  color: ${props => props.theme.color.gray.dark};
  background-color: ${props => props.theme.color.gray.light};
  border-radius: ${props => props.theme.borderRadius.default};

  &:hover {
    background-color: ${props => props.theme.color.gray.dark};
    color: ${props => props.theme.color.gray.light};
  }

  svg {
    fill: currentColor;
    margin-right: ${props => props.theme.spacing.s2};
  }
`;

export default CreateItem;
