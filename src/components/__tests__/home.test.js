import React from 'react';
import { render } from '../../test-utils';
import { waitForElement } from '@testing-library/react';
import Home from '../Home';

describe('<Home />', () => {
  test('should fetch data passed from apis', async () => {
    const component = render(<Home />);

    await waitForElement(() => component.container.querySelector('.list_item'));

    expect(component.container).toHaveTextContent('01001-000');
    expect(component.container).toHaveTextContent('Praça da Sé');

    expect(component.container).toHaveTextContent('01002-000');
    expect(component.container).toHaveTextContent('Rua Direita');

    expect(component.container).toHaveTextContent('01003-000');
    expect(component.container).toHaveTextContent('Rua José Bonifácio');
  });
});
