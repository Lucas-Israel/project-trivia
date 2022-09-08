import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testando o aplicativo', () => {
  describe('Testando a página de login', () => {
    test('01. Os inputs de playername e email funcionam corretamente', () => {
      renderWithRouterAndRedux(<App />, '/config');

      const playerNameInput = screen.getByTestId('input-player-name');
      const gravatarEmailInput = screen.getByTestId('input-gravatar-email');

      userEvent.type(playerNameInput, 'abc');
      userEvent.type(gravatarEmailInput, 'def');

      expect(playerNameInput.value).toBe('abc');
      expect(gravatarEmailInput.value).toBe('def');
    })

    test('02. O botão de play não está disponivel caso os inputs de nome e email não estiverem preenchidos', () => {
      renderWithRouterAndRedux(<App />, '/config');

      const playerNameInput = screen.getByTestId('input-player-name');
      const gravatarEmailInput = screen.getByTestId('input-gravatar-email');
      let playBtn = screen.getByTestId('btn-play');

      expect(playBtn.disabled).toBe(true);

      userEvent.type(playerNameInput, 'abc');
      userEvent.type(gravatarEmailInput, 'def');

      playBtn = screen.getByTestId('btn-play');

      expect(playBtn.disabled).toBe(false);
    })

    test('03. Apertando o botão play recebe informações da API, salva no local storage e muda a tela para /game', async () => {
      const { history } = renderWithRouterAndRedux(<App />)

      const playerNameInput = screen.getByTestId('input-player-name');
      const gravatarEmailInput = screen.getByTestId('input-gravatar-email');
      let playBtn = screen.getByTestId('btn-play');

      expect(playBtn.disabled).toBe(true);

      userEvent.type(playerNameInput, 'abc');
      userEvent.type(gravatarEmailInput, 'def');

      expect(playBtn.disabled).toBe(false);

      userEvent.click(playBtn)

      await waitFor(() => expect(history.location.pathname).toBe('/game'))
    })
  })
})