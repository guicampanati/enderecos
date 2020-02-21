import React from 'react';
import { render } from '../../../test-utils';
import { waitForElement } from '@testing-library/react';
import Weather from '../Weather';

describe('<Weather /> ', () => {
  const props = {
    address: {
      id: '64573eab-7cb0-47d7-8966-c3eb20c5c103',
      cep: '01001-000',
      numero: '1',
      complemento: '101'
    },
    addressData: {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP'
    },
    addressWeather: [
      {
        main: { temp: 30.1 },
        dt_txt: '2020-02-20 00:00:00',
        weather: [{ id: '01', description: 'céu limpo' }]
      },
      {
        main: { temp: 28.33 },
        dt_txt: '2020-02-21 00:00:00',
        weather: [{ id: '01', description: 'nuvens dispersas' }]
      },
      {
        main: { temp: 23.9 },
        dt_txt: '2020-02-22 00:00:00',
        weather: [{ id: '01', description: 'chuva moderada' }]
      }
    ]
  };

  let component;

  beforeEach(async () => {
    component = render(
      <Weather
        address={props.address}
        addressData={props.addressData}
        addressWeather={props.addressWeather}
      />
    );

    await waitForElement(() => component.container.querySelector('#weather'));
  });

  test('should render address', () => {
    const main = component.container.querySelector('#info-address-main');
    expect(main).toHaveTextContent(
      `${props.addressData.logradouro}, ${props.address.numero}/${props.address.complemento}`
    );

    const cep = component.container.querySelector('#info-address-cep');
    expect(cep).toHaveTextContent(props.address.cep);

    const section = component.container.querySelector('#info-address-section');
    expect(section).toHaveTextContent(
      `${props.addressData.bairro}, ${props.addressData.localidade} - ${props.addressData.uf}`
    );
  });

  test('should render buttons', () => {
    const editButton = component.container.querySelector('a');
    expect(editButton).toHaveTextContent('Editar');
    expect(editButton).toHaveAttribute(
      'href',
      expect.stringMatching(`/editar/${props.address.id}`)
    );

    const deleteButton = component.container.querySelector('a:nth-child(2)');
    expect(deleteButton).toHaveTextContent('Deletar');
    expect(deleteButton).toHaveAttribute(
      'href',
      expect.stringMatching(`/deletar/${props.address.id}`)
    );
  });

  test('should render current weather', () => {
    const temp = component.container.querySelector('#weather-temp');
    expect(temp).toHaveTextContent(props.addressWeather[0].main.temp.toFixed());

    const info = component.container.querySelector('#weather-info');
    expect(info).toHaveTextContent(
      props.addressWeather[0].weather[0].description
    );

    const forecast = component.container.querySelectorAll('#forecast');

    expect(forecast.length).toBe(props.addressWeather.length);
  });
});
