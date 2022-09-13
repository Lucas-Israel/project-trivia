import React from 'react';
import { waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import loginHelper from './helpers/loginHelper';
import invalidToken from './helpers/invalidToken';
import returnInvalid from './helpers/returnCode3';

afterEach(() => jest.clearAllMocks());

describe('Testando caso o componente Game receba uma "INVALID_TOKEN"', () => {
  it('01. Recebendo "INVALID_TOKEN" retorna para a pagina de login', async () => {
    jest.spyOn(global, 'fetch');

    const {history, store} = renderWithRouterAndRedux(<App/>);

    loginHelper('abc', 'def@ghi');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(invalidToken),
    });

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(returnInvalid),
    });

    await waitFor(() => expect(history.location.pathname).toEqual('/'));
 
  })
})