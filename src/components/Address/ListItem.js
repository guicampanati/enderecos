import React from 'react';
import addressService from '../../services/addresses';

const ListItem = ({ address }) => (
  <div>
    <span>{address.id}</span>
    <button onClick={() => addressService.remove(address.id)}>Deletar</button>
  </div>
);

export default ListItem;
