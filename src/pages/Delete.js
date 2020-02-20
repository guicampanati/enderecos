import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import addressService from '../services/addresses';
import Modal from '../components/Modal';
import Button from '../components/Button';

const Delete = () => {
  const { id } = useParams();
  const history = useHistory();

  const renderActions = () => (
    <Button.Container>
      <Button to="/" danger="true" onClick={() => addressService.remove(id)}>
        Deletar
      </Button>
      <Button to={`/${id}`}>Cancelar</Button>
    </Button.Container>
  );

  const renderContent = () => {
    return 'Tem certeza que quer deletar este endereço?';
  };

  return (
    <Modal
      title="Deletar Endereço"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push(`/${id}`)}
    />
  );
};

export default Delete;
