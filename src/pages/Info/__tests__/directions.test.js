import React from 'react';
import { render } from '../../../test-utils';
import Directions from '../Directions';

describe('<Directions />', () => {
  const props = {
    userCoords: { latitude: '000', longitude: '999' },
    addressCoords: { latitude: '123', longitude: '456' }
  };

  test('should render link with correct attributes', () => {
    const component = render(
      <Directions
        userCoords={props.userCoords}
        addressCoords={props.addressCoords}
      />
    );
    const link = component.container.querySelector('a');

    expect(link).toHaveAttribute(
      'href',
      expect.stringMatching(
        `${props.userCoords.latitude},${props.userCoords.longitude}&destination=${props.addressCoords.latitude},${props.addressCoords.longitude}`
      )
    );
  });
});
