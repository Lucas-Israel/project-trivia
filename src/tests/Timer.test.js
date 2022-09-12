import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App'
import Game from '../pages/Game';
import {stateMock} from './helpers/meAjude'

describe('Testando o componente Time', () => {
  jest.setTimeout(50000)
  it ('O timer vai de 30 a 0 em 30 segundos (aproximadamente)', async () => {
    const { history } = renderWithRouterAndRedux(<App />)

    let nameInput = screen.getByTestId('input-player-name');
    let emailInput = screen.getByTestId('input-gravatar-email');
    let btnPlay = screen.getByTestId('btn-play');
  
    expect(btnPlay).toBeDisabled();
  
    userEvent.type(nameInput, 'abc');
    userEvent.type(emailInput, 'def@ghi');
  
    btnPlay = screen.getByTestId('btn-play');
  
    expect(btnPlay.innerHTML).toBe('Play');
  
    userEvent.click(btnPlay);

    let correctBtn = await screen.findByTestId('correct-answer');

    expect(correctBtn).not.toBeDisabled();

    const timer = screen.getByTestId('eusouotempo')

    await waitFor(() => {
      expect(correctBtn).toBeDisabled()
      expect(timer.innerHTML).toBe('0')
    }, {timeout: 32000})

  })
})