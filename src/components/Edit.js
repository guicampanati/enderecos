import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import addressService from '../services/addresses';

const Edit = () => {
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
