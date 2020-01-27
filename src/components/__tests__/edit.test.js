import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import Edit from '../Edit';
import theme from '../../theme';

describe('<Edit />', () => {
  test('should fetch initialValues', async () => {
    const id = '64573eab-7cb0-47d7-8966-c3eb20c5c103';

    const component = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[`/editar/${id}`]}>
          <Route path="/editar/:id">
            <Edit />
          </Route>
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitForElement(() => component.container.querySelector('form'));

    const cepInput = component.getByLabelText('CEP');
    expect(cepInput).toHaveAttribute(
      'value',
      expect.stringMatching('01001-000')
    );

    const numInput = component.getByLabelText('Número');
    expect(numInput).toHaveAttribute('value', expect.stringMatching('1'));

    const compInput = component.getByLabelText('Complemento');
    expect(compInput).toHaveAttribute('value', expect.stringMatching('101'));
  });
});
