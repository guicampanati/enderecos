import React from 'react';
import { render } from '../../../test-utils';
import { waitForElement } from '@testing-library/react';
import Home from '..';

describe('<Home />', () => {
  let component;

  beforeEach(async () => {
    component = render(<Home />);

    await waitForElement(() => component.container.querySelector('#home'));
  });

  test('should render mock addresses', () => {
    const addresses = component.container.querySelectorAll('a');

    expect(addresses.length).toBe(3);
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
