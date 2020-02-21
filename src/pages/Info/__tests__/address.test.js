import React from 'react';
import { render } from '../../../test-utils';
import { waitForElement } from '@testing-library/react';
import Address from '../../Home/Address';

describe('<Address /> ', () => {
  const props = {
    id: '64573eab-7cb0-47d7-8966-c3eb20c5c103',
    cep: '01001-000',
    numero: '1',
    complemento: '101'
  };

  let component;

  beforeEach(async () => {
    component = render(<Address address={props} />);

    await waitForElement(() =>
      component.container.querySelector('#home-address')
    );
  });

  test('should render fetched addressData', () => {
    const cep = component.container.querySelector('#home-address-cep');
    expect(cep).toHaveTextContent(props.cep);

    const logradouro = component.container.querySelector('#home-address-main');
    expect(logradouro).toHaveTextContent(
      `Praça da Sé, ${props.numero}/${props.complemento}`
    );

    const localidade = component.container.querySelector(
      '#home-address-section'
    );
    expect(localidade).toHaveTextContent('Sé, São Paulo - SP');
  });
});
