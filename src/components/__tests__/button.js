import React from 'react';
import { render } from '../../test-utils';
import Button from '../Button';

describe('<Button />', () => {
  const props = { to: '/test' };

  test('should render button with attribute link', () => {
    const component = render(<Button to={props.to} />);
    const button = component.container.querySelector('a');

    expect(button).toHaveAttribute('href', expect.stringMatching(props.to));
  });

  test('should render button with attribute danger', () => {
    const component = render(<Button to={props.to} danger="true" />);
    const buttonDanger = component.container.querySelector('a');

    expect(buttonDanger).toHaveAttribute('danger');
  });
});
