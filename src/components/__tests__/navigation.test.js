import React from 'react';
import { render } from '../../test-utils';
import Navigation from '../Navigation';

describe('<Navigation />', () => {
  let component;

  beforeEach(() => {
    component = render(<Navigation />);
  });

  test('should render logo component and link', () => {
    const logo = component.container.querySelector('#link-logo');

    expect(logo).toHaveTextContent('Endereços');
    expect(logo).toHaveAttribute('href', expect.stringMatching('/'));
  });

  test('should render nav list addresses and link', () => {
    const listEnderecos = component.container.querySelector('#list-addresses');

    expect(listEnderecos).toHaveTextContent('Listar Endereços');
    expect(listEnderecos).toHaveAttribute('href', expect.stringMatching('/'));
  });

  test('should render add address and link', () => {
    const addEnderecos = component.container.querySelector('#add-address');

    expect(addEnderecos).toHaveTextContent('Adicionar Endereço');
    expect(addEnderecos).toHaveAttribute(
      'href',
      expect.stringMatching('/criar')
    );
  });
});
