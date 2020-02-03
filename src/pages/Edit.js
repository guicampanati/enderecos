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
            addressService.update(id, address);
            history.push('/');
          }}
        />
      )}
    </div>
  );
};

export default Edit;
