import React from 'react';
import { render } from '../../test-utils';
import { fireEvent, waitForElement } from '@testing-library/react';
import Form from '../Form';

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

  test('should render save button and change disabled attribute', async () => {
    const saveButton = component.container.querySelector('button');
    const cepInput = component.getByLabelText('CEP');

    expect(saveButton).toHaveTextContent('Salvar');
    expect(saveButton).toHaveAttribute('disabled');

    fireEvent.change(cepInput, { target: { value: '01001000' } });

    await waitForElement(() => component.container.querySelector('form'));

    expect(saveButton).not.toHaveAttribute('disabled');
  });

  test('should render undo button and change disabled attribute', async () => {
    const undoButton = component.container.querySelector('button:nth-child(2)');
    const cepInput = component.getByLabelText('CEP');

    expect(undoButton).toHaveTextContent('Desfazer');
    expect(undoButton).toHaveAttribute('disabled');

    fireEvent.change(cepInput, { target: { value: '01001000' } });

    await waitForElement(() => component.container.querySelector('form'));

    expect(undoButton).not.toHaveAttribute('disabled');
  });

  test('should render error message with empty data onSubmit', async () => {
    const form = component.container.querySelector('form');
    const cepInput = component.getByLabelText('CEP');

    fireEvent.change(cepInput, { target: { value: '' } });
    fireEvent.submit(form);

    await waitForElement(() => component.container.querySelector('form'));

    expect(onSubmit.mock.calls.length).toBe(0);
    expect(component.container.querySelector('p')).toHaveTextContent(
      'Campo Obrigatório.'
    );
  });

  test('should render error message with invalid data onSubmit', async () => {
    const form = component.container.querySelector('form');
    const cepInput = component.getByLabelText('CEP');

    fireEvent.change(cepInput, { target: { value: '999' } });
    fireEvent.submit(form);

    await waitForElement(() => component.container.querySelector('form'));

    expect(onSubmit.mock.calls.length).toBe(0);
    expect(component.container.querySelector('p')).toHaveTextContent(
      'CEP Inválido.'
    );
  });

  test('should call onSubmit with valid data', async () => {
    const form = component.container.querySelector('form');
    const cepInput = component.getByLabelText('CEP');
    const numInput = component.getByLabelText('Número');

    fireEvent.change(cepInput, { target: { value: '01001000' } });
    fireEvent.change(numInput, { target: { value: '101' } });
    fireEvent.submit(form);

    await waitForElement(() => component.container.querySelector('form'));

    expect(onSubmit.mock.calls.length).toBe(1);
  });
});
