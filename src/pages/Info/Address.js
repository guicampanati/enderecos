import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const Address = ({ address, addressData }) => {
  return (
    <Container>
      <Div>
        <H3>
          {addressData.logradouro}, {address.numero}
          {address.complemento && <span>/{address.complemento}</span>}
        </H3>
        <H3>{addressData.cep}</H3>
        <H3>{addressData.bairro}</H3>
        <H3>{addressData.localidade}</H3>
      </Div>

      <Button.Container>
        <Button to={`/editar/${address.id}`}>Editar</Button>
        <Button to={`/deletar/${address.id}`} danger="true">
          Deletar
        </Button>
      </Button.Container>
    </Container>
  );
};

const Container = styled.div`
  width: ${props => props.theme.width.full};
  margin-bottom: ${props => props.theme.spacing.s4};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const H3 = styled.h3`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.base};
  margin: 0;
`;

export default Address;
