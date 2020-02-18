import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from '../components/Form';
import addressService from '../services/addresses';
import { useAddress } from '../hooks';

const Edit = () => {
  const { id } = useParams();
  const address = useAddress(id);
  const history = useHistory();

  return (
    <div>
      {address && (
        <Form
          initialValues={address}
          onSubmit={address => {
            const newAddress = {
              id: address.id,
              cep: address.cep,
              numero: address.numero,
              complemento: address.complemento
            };
            addressService.update(id, newAddress);
            history.push(`/${id}`);
          }}
        />
      )}
    </div>
  );
};

export default Edit;
