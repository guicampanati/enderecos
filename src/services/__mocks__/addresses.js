const addresses = [
  {
    id: '64573eab-7cb0-47d7-8966-c3eb20c5c103',
    cep: '01001-000',
    numero: '1',
    complemento: '101'
  },
  {
    id: '91b03e9a-2ec7-483e-b0cc-9f660d7c8c95',
    cep: '01002-000',
    numero: '2',
    complemento: '202'
  },
  {
    id: '96c7f653-391a-483a-bc64-99ec9c7d9035',
    cep: '01003-000',
    numero: '3',
    complemento: '303'
  }
];

const getAll = () => {
  return addresses;
};

export default { getAll };
