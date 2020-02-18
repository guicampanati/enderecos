import React from 'react';
import { render } from '../../test-utils';
import Navigation from '../Navigation';

describe('<Navigation />', () => {
  let component;

  beforeEach(() => {
    component = render(<Navigation />);
  });

  test('should render logo component and link', () => {
    const logo = component.container.querySelector('nav a');

    expect(logo).toHaveTextContent('Endereços');
    expect(logo).toHaveAttribute('href', expect.stringMatching('/'));
  });

  test('should render nav list addresses and link', () => {
    const listEnderecos = component.container.querySelector(
      'nav div:nth-child(3) a'
    );

    expect(listEnderecos).toHaveTextContent('Listar Endereços');
    expect(listEnderecos).toHaveAttribute('href', expect.stringMatching('/'));
  });

  test('should render add address and link', () => {
    const addEnderecos = component.container.querySelector(
      'nav div:nth-child(4) a'
    );

    expect(addEnderecos).toHaveTextContent('Adicionar Endereço');
    expect(addEnderecos).toHaveAttribute(
      'href',
      expect.stringMatching('/criar')
    );
  });
});
