import React from 'react';
import { render } from '../../test-utils';
import StaticMap from '../Home/StaticMap';

describe('<StaticMap />', () => {
  const props = { addressCoords: { latitude: '123', longitude: '456' } };

  test('should render image ith correct attributes', () => {
    const component = render(<StaticMap addressCoords={props.addressCoords} />);
    const img = component.container.querySelector('img');

    expect(img).toHaveAttribute('alt', expect.stringMatching('mapa endereço'));

    expect(img).toHaveAttribute(
      'src',
      expect.stringMatching(
        `${props.addressCoords.latitude}%2C${props.addressCoords.longitude}`
      )
    );
  });
});
