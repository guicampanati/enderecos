import v4 from 'uuid';

const getAll = () => {
  try {
    const localStorageKey = window.localStorage.getItem('addresses');
    if (typeof localStorageKey !== 'string') {
      window.localStorage.setItem('addresses', '[]');
    } else {
      return JSON.parse(localStorageKey);
    }
  } catch {
    return;
  }
};

const create = addressData => {
  const addressList = getAll();

  if (addressList) {
    const newAddressList = [
      ...addressList,
      {
        id: v4(),
        ...addressData
      }
    ];
    window.localStorage.setItem('addresses', JSON.stringify(newAddressList));
  }
};

const update = (id, addressData) => {
  const addressList = getAll();

  if (addressList) {
    const newAddressList = addressList.filter(address => {
      return address.id !== id;
    });

    newAddressList.push({
      id: id,
      ...addressData
    });

    window.localStorage.setItem('addresses', JSON.stringify(newAddressList));
  }
};

const remove = id => {
  const addressList = getAll();

  if (addressList) {
    const newAddressList = addressList.filter(address => {
      return address.id !== id;
    });

    window.localStorage.setItem('addresses', JSON.stringify(newAddressList));
  }
};

export default { getAll, create, update, remove };
