import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import addressService from '../services/addresses';

const Create = () => {
  const history = useHistory();

  return (
    <Form
      onSubmit={address => {
        addressService.create(address);
        history.push('/');
      }}
    />
  );
};

export default Create;
