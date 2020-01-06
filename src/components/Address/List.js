import React from 'react';
import ListItem from './ListItem';
import addressService from '../../services/addresses';

const List = ({ addresses }) => (
  <div>
    <button onClick={() => addressService.create()}>Adicionar Endereço</button>
    {addresses &&
      addresses.map(address => <ListItem key={address.id} address={address} />)}
  </div>
);

export default List;
