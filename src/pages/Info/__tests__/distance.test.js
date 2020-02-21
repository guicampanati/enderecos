import React from 'react';
import { render } from '../../../test-utils';
import Distance from '../Distance';

describe('<Distance />', () => {
  const props = {
    userCoords: { latitude: '000', longitude: '999' },
    addressCoords: { latitude: '123', longitude: '456' }
  };

  test('should render distance between coords', () => {
    const component = render(
      <Distance
        userCoords={props.userCoords}
        addressCoords={props.addressCoords}
      />
    );
    const distance = component.container.querySelector('span');

    expect(distance).toHaveTextContent('6343.79km distante de você.');
  });
});
