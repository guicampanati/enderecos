import React from 'react';
import { render } from '../../test-utils';
import { waitForElement } from '@testing-library/react';
import ListItem from '../Home/ListItem';

describe('<ListItem />', () => {
  const props = {
    id: '64573eab-7cb0-47d7-8966-c3eb20c5c103',
    cep: '01001-000',
    numero: '1',
    complemento: '101'
  };

  let component;

  beforeEach(async () => {
    component = render(<ListItem address={props} />);

    await waitForElement(() => component.container.querySelector('.list_item'));
  });

  test('should render loading state before data is ready', async () => {
    const componentLoading = render(<ListItem address={props} />);

    const loading = componentLoading.container.querySelectorAll('.loading');
    expect(loading.length).toBe(1);

    await waitForElement(() =>
      componentLoading.container.querySelector('.list_item')
    );
  });

  test('should render address after data is ready', () => {
    const cep = component.container.querySelector('h3');
    expect(cep).toHaveTextContent('01001-000');

    const logradouro = component.container.querySelector('h4');
    expect(logradouro).toHaveTextContent('Praça da Sé, 1/101');

    const localidade = component.container.querySelector('p');
    expect(localidade).toHaveTextContent('Sé, São Paulo - SP');
  });

  test('should render edit link', () => {
    const editButton = component.container.querySelector('a:nth-child(2)');
    expect(editButton).toHaveTextContent('Editar');
    expect(editButton).toHaveAttribute(
      'href',
      expect.stringMatching(`/editar/${props.id}`)
    );
  });

  test('should render delete link', () => {
    const deleteButton = component.container.querySelector('a:nth-child(3)');
    expect(deleteButton).toHaveTextContent('Deletar');
    expect(deleteButton).toHaveAttribute('danger');
    expect(deleteButton).toHaveAttribute(
      'href',
      expect.stringMatching(`/deletar/${props.id}`)
    );
  });
});
