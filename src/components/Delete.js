import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import addressService from '../services/addresses';
import Modal from './Modal';
import Button from './Button';

const Delete = () => {
  const [address, setAddress] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const addressToEdit = addressService
      .getAll()
      .find(address => address.id === id);

    if (addressToEdit) {
      setAddress(addressToEdit);
    }
  }, [id]);

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
