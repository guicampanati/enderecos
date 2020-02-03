import React from 'react';

const Detail = ({ address, addressData }) => (
  <>
    {address && addressData && (
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

export default Detail;
