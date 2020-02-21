import React from 'react';
import { render } from '../../test-utils';
import Delete from '.';

describe('<Delete />', () => {
  let component;
  let modal = document.createElement('div');
  modal.setAttribute('id', 'modal');

  beforeEach(() => {
    component = render(<Delete />, {
      container: document.body.appendChild(modal)
    });
  });

  test('should render delete message', () => {
    const message = component.container.querySelector('p');

    expect(message).toHaveTextContent(
      'Tem certeza que quer deletar este endereço?'
    );
  });

  test('should render delete button', () => {
    const deleteButton = component.container.querySelector('a');
    expect(deleteButton).toHaveTextContent('Deletar');
    expect(deleteButton).toHaveAttribute('danger');
    expect(deleteButton).toHaveAttribute('href', expect.stringMatching('/'));
  });

  test('should render cancel button', () => {
    const cancelButton = component.container.querySelector('a:nth-child(2)');
    expect(cancelButton).toHaveTextContent('Cancelar');
    expect(cancelButton).toHaveAttribute('href', expect.stringMatching('/'));
  });
});
