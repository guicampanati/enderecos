import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Add from '../../svg/Add';

const CreateItem = () => (
  <Card.Container>
    <Card.Wrapper>
      <LinkAdd to="/criar">
        <Add />
        <div>Adicionar Endereço</div>
      </LinkAdd>
    </Card.Wrapper>
  </Card.Container>
);

const LinkAdd = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.s12};
  color: ${props => props.theme.color.gray.dark};

  &:hover {
    background-color: ${props => props.theme.color.gray.dark};
    color: ${props => props.theme.color.gray.light};
  }

  svg {
    fill: currentColor;
    margin-bottom: ${props => props.theme.spacing.s2};
  }
`;

export default CreateItem;
