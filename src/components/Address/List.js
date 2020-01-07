import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

const List = ({ addresses }) => (
  <div>
    <Link to={'/criar'}>Adicionar Endereço</Link>
    {addresses &&
      addresses.map(address => <ListItem key={address.id} address={address} />)}
  </div>
);

export default List;
