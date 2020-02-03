import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import addressService from '../services/addresses';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { useAddress } from '../hooks';

const Delete = () => {
  const { id } = useParams();
  const address = useAddress(id);
  const history = useHistory();

  const renderActions = () => (
    <Button.Container>
      <Button to="/" danger="true" onClick={() => addressService.remove(id)}>
        Deletar
      </Button>
      <Button to="/">Cancelar</Button>
    </Button.Container>
  );

  const renderContent = () => {
    if (!address) {
      return 'Tem certeza que quer deletar este endereço?';
    }

    return `Tem certeza que deseja deletar o endereço ${address.cep}, ${address.numero}?`;
  };

  return (
    <Modal
      title="Deletar Endereço"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push('/')}
    />
  );
};

export default Delete;
