import React from 'react';
import { render } from '../../test-utils';
import { fireEvent, waitForElement } from '@testing-library/react';
import Form from '../Address/Form';

describe('<Form />', () => {
  let component;
  const onSubmit = jest.fn();

  beforeEach(() => {
    component = render(<Form onSubmit={onSubmit} />);
  });

  test('should have a cep input', () => {
    const cepInput = component.getByLabelText('CEP');
    expect(cepInput).toHaveAttribute('name', expect.stringMatching('cep'));
  });

  test('should have a numero input', () => {
    const numInput = component.getByLabelText('Número');
    expect(numInput).toHaveAttribute('name', expect.stringMatching('numero'));
  });

  test('should have a complemento input', () => {
    const compInput = component.getByLabelText('Complemento');
    expect(compInput).toHaveAttribute(
      'name',
      expect.stringMatching('complemento')
    );
  });

  test('should call onSubmit', async () => {
    const form = component.container.querySelector('form');
    const cepInput = component.getByLabelText('CEP');
    const numInput = component.getByLabelText('Número');

    // valid data
    fireEvent.change(cepInput, { target: { value: '01001000' } });
    fireEvent.change(numInput, { target: { value: '101' } });
    fireEvent.submit(form);

    await waitForElement(() => component.container.querySelector('form'));

    expect(onSubmit.mock.calls.length).toBe(1);
  });
});
