import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import addressService from '../services/addresses';

const Delete = () => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    addressService.remove(id);
    history.push('/');
  }, [id, history]);

  return <></>;
};

export default Delete;
