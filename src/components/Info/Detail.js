import React from 'react';
import { useAddressData } from '../../hooks';

const Detail = ({ address }) => {
  const addressData = useAddressData(address.cep);

  return (
    <>
      {addressData && (
        <>
          <div>
            {addressData.logradouro}, {address.numero}
            {address.complemento && <div>/{address.complemento}</div>}
          </div>
          <div>{address.cep}</div>
          <div>{addressData.bairro}</div>
          <div>
            {addressData.localidade} - {addressData.uf}
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
