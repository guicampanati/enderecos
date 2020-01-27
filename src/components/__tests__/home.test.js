import React from 'react';
import { render } from '../../test-utils';
import { waitForElement } from '@testing-library/react';
import Home from '../Home';

describe('<Home />', () => {
  let component;

  beforeEach(async () => {
    component = render(<Home />);

    await waitForElement(() => component.container.querySelector('.list_item'));
  });

  test('should render a createItem button', () => {
    const createItem = component.container.querySelectorAll('.create_item');
    expect(createItem.length).toBe(1);
  });

  test('should fetch data passed from apis', () => {
    expect(component.container).toHaveTextContent('01001-000');
    expect(component.container).toHaveTextContent('Praça da Sé');

    expect(component.container).toHaveTextContent('01002-000');
    expect(component.container).toHaveTextContent('Rua Direita');

    expect(component.container).toHaveTextContent('01003-000');
    expect(component.container).toHaveTextContent('Rua José Bonifácio');
  });
});
