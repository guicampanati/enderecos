import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import viacep from '../../services/viacep';
import addressService from '../../services/addresses';

const ListItem = ({ address }) => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    viacep.get(`${address.cep}/json`).then(response => {
      setAddressData(response.data);
    });
  }, [address.cep]);

  return (
    <div>
      {addressData ? (
        <div>
          <span>
            {addressData.logradouro}, {address.numero}
            {', '}
            {address.complemento && <span>/{address.complemento} </span>}
            {addressData.bairro}, {addressData.localidade} - {addressData.uf}
          </span>
          <Link to={`/editar/${address.id}`}>Editar</Link>
          <button onClick={() => addressService.remove(address.id)}>
            Deletar
          </button>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default ListItem;
