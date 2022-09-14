import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import loginHelper from './helpers/loginHelper';
import invalidToken from './helpers/invalidToken';
import returnInvalid from './helpers/returnCode3';

describe('Testando caso o componente Game receba uma "INVALID_TOKEN"', () => {
  it('01. Recebendo "INVALID_TOKEN" retorna para a pagina de login', async () => {
    jest.spyOn(global, 'fetch');

    const {history, store} = renderWithRouterAndRedux(<App/>);
    
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(invalidToken),
    });
    
    loginHelper('abc', 'def@ghi');
    
    await waitFor(() => expect(history.location.pathname).toEqual('/'));

    await waitFor(() => expect(window.localStorage.getItem('token')).toEqual('INVALID_TOKEN'));

  })
})