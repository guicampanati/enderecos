import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Button from '../Button';
import Loading from '../Loading';
import viacep from '../../services/viacep';

const ListItem = ({ address }) => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    viacep.get(`${address.cep}/json`).then(response => {
      setAddressData(response.data);
    });
  }, [address.cep]);

  return (
    <Card.Container>
      <Card.Wrapper>
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
            <Button.Container>
              <Button to={`/editar/${address.id}`}>Editar</Button>
              <Button danger="true" to={`/deletar/${address.id}`}>
                Deletar
              </Button>
            </Button.Container>
          </Card>
        ) : (
          <Loading />
        )}
      </Card.Wrapper>
    </Card.Container>
  );
};

export default ListItem;
