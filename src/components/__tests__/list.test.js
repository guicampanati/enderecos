import React from 'react';
import { render } from '../../test-utils';
import { waitForElement } from '@testing-library/react';
import List from '../Address/List';

describe('<List />', () => {
  const props = [
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

  let component;

  beforeEach(async () => {
    component = render(<List addresses={props} />);

    await waitForElement(() => component.container.querySelector('.list_item'));
  });

  test('should not render list if props is an empty array', () => {
    const componentEmpty = render(<List addresses={[]} />);

    const listItems = componentEmpty.container.querySelectorAll('.list_item');

    expect(listItems.length).toBe(0);
  });

  test('should render a createItem button', () => {
    const createItem = component.container.querySelectorAll('.create_item');
    expect(createItem.length).toBe(1);
  });

  test('should render data passed from props', () => {
    const listItems = component.container.querySelectorAll('.list_item');
    expect(listItems.length).toBe(3);

    expect(component.container).toHaveTextContent('01001-000');
    expect(component.container).toHaveTextContent('01002-000');
    expect(component.container).toHaveTextContent('01003-000');
  });
});
