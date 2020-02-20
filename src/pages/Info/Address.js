import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const Address = ({ address, addressData }) => {
  return (
    <Container>
      <Div>
        <H4>
          {addressData.logradouro}, {address.numero}
          {address.complemento && <span>/{address.complemento}</span>}
        </H4>
        <H3>{addressData.cep}</H3>
        <Span>
          {addressData.bairro}, {addressData.localidade} - {addressData.uf}
        </Span>
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
  padding: ${props => props.theme.spacing.s4};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.color.gray.medium};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const H4 = styled.h4`
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.xl};
  margin-top: ${props => props.theme.spacing.s1};
  margin-bottom: ${props => props.theme.spacing.s1};
  color: ${props => props.theme.color.gray.dark};
`;

const H3 = styled.h3`
  font-weight: ${props => props.theme.fontWeight.normal};
  font-size: ${props => props.theme.fontSize.base};
  margin-top: ${props => props.theme.spacing.s1};
  margin-bottom: ${props => props.theme.spacing.s1};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.25;
  color: ${props => props.theme.color.gray.dark};
`;

const Span = styled.span`
  color: ${props => props.theme.color.gray.medium};
  font-size: ${props => props.theme.fontSize.sm};
`;

export default Address;
