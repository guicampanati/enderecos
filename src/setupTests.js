import '@testing-library/jest-dom/extend-expect';

// localStorage mock data
jest.mock('./services/addresses');

// external api mock data
jest.mock('./services/viacep');

let savedItems = {};

const localStorageMock = {
  setItem: (key, item) => {
    savedItems[key] = item;
  },
  getItem: key => savedItems[key],
  clear: () => {
    savedItems = {};
  }
};

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
