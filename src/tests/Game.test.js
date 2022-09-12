import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testando caso o componente Game receba uma "INVALID_TOKEN"', () => {
  it('01. Recebendo "INVALID_TOKEN"', async () => {
    const {history} = renderWithRouterAndRedux(<App />)

    const invalid = {
      "response_code": 3,
      "results": []
    }

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(invalid),
    });

    const nameInput = screen.getByTestId('input-player-name');
    const emailInput = screen.getByTestId('input-gravatar-email');
    let btnPlay = screen.getByTestId('btn-play');
    let enderecoAtual = history.location.pathname;

    expect(enderecoAtual).toBe('/');

    expect(btnPlay).toBeDisabled();

    userEvent.type(nameInput, 'abc');
    userEvent.type(emailInput, 'def@ghi');

    btnPlay = screen.getByTestId('btn-play');

    expect(btnPlay.innerHTML).toBe('Play');

    userEvent.click(btnPlay);
  })
})