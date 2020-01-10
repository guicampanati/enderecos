import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import viacep from '../../services/viacep';
import addressService from '../../services/addresses';

const ListItem = ({ address }) => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    viacep.get(`${address.cep}/json`).then(response => {
      setAddressData(response.data);
    });
  }, [address.cep]);

  return (
    <CardContainer>
      <CardWrapper>
        {addressData ? (
          <Card>
            <h3>{address.cep}</h3>
            <h4>
              {addressData.logradouro}, {address.numero}
              {address.complemento && <span>/{address.complemento}</span>}
            </h4>
            <p>
              <span>
                {addressData.bairro}, {addressData.localidade} -{' '}
                {addressData.uf}
              </span>
            </p>
            <ButtonWrapper>
              <Button to={`/editar/${address.id}`}>Editar</Button>
              <button onClick={() => addressService.remove(address.id)}>
                Deletar
              </button>
            </ButtonWrapper>
          </Card>
        ) : (
          <div>Carregando...</div>
        )}
      </CardWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.width.full};
  @media (min-width: ${props => props.theme.screen.md}) {
    width: ${props => props.theme.width.w1_2};
  }
  @media (min-width: ${props => props.theme.screen.lg}) {
    width: ${props => props.theme.width.w1_3};
  }
  margin-bottom: ${props => props.theme.spacing.s8};
  padding-left: ${props => props.theme.spacing.s3};
  padding-right: ${props => props.theme.spacing.s3};
`;

const CardWrapper = styled.div`
  overflow: hidden;
  background-color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.lg};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.s6};

  h3 {
    font-weight: ${props => props.theme.fontWeight.semibold};
    margin: 0;
  }

  h4 {
    margin-top: ${props => props.theme.spacing.s2};
    margin-bottom: ${props => props.theme.spacing.s0};
    font-weight: ${props => props.theme.fontWeight.semibold};
    font-size: ${props => props.theme.fontSize.lg};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin-top: ${props => props.theme.spacing.s2};
    margin-bottom: ${props => props.theme.spacing.s0};
    display: inline-flex;
    align-items: center;

    span {
      color: ${props => props.theme.color.gray.medium};
      font-size: ${props => props.theme.fontSize.sm};
    }
  }
`;

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing.s4};
`;

export default ListItem;
