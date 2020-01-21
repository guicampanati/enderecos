const addressList = [
  {
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP'
  },
  {
    cep: '01002-000',
    logradouro: 'Rua Direita',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP'
  },
  {
    cep: '01003-000',
    logradouro: 'Rua José Bonifácio,',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP'
  }
];

const get = cepQuery => {
  const cep = cepQuery.slice(0, 9);

  const addressData = addressList.find(address => {
    return address.cep === cep;
  });

  const response = { data: addressData };

  return Promise.resolve(response);
};

export default { get };
