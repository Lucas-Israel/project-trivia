import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import Feedback from '../pages/Feedback';

describe('Testando a pagina Feedback', () => {

  it('Renderiza corretamente a pagina feedback', () => {
    renderWithRouterAndRedux(<Feedback/>);
    const feedbackText = screen.getByTestId('feedback-text');
    const acertos = screen.getByTestId('feedback-total-question');
    const btnRank = screen.getByTestId('btn-ranking');

    expect(feedbackText).toBeInTheDocument();
    expect(acertos).toBeInTheDocument();
    expect(btnRank).toBeInTheDocument();

    const storage = window.localStorage.getItem('ranking')
  })
  
  it('Testa a funcionalidade da pagina feedback', async () => {
    let { history } = renderWithRouterAndRedux(<App/>);
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
    
    await waitFor(() => expect(history.location.pathname).toEqual('/game'));
  })
  
  it('Testa se o jogo corre normalmente', async () => {
    let { history } = renderWithRouterAndRedux(<App/>);
    let nameInput = screen.getByTestId('input-player-name');
    let emailInput = screen.getByTestId('input-gravatar-email');
    let btnPlay = screen.getByTestId('btn-play');
  
    expect(btnPlay).toBeDisabled();
  
    userEvent.type(nameInput, 'abc');
    userEvent.type(emailInput, 'def@ghi');
  
    btnPlay = screen.getByTestId('btn-play');
  
    expect(btnPlay.innerHTML).toBe('Play');
  
    userEvent.click(btnPlay);
  
    await waitFor(() => expect(history.location.pathname).toEqual('/game'));
  
    for (let index = 0; index < 5; index += 1 ) {
      let correctAnw = await waitFor(() => screen.getByTestId('correct-answer'));
      userEvent.click(correctAnw);
      let nextBtn = screen.getByTestId('btn-next');
      userEvent.click(nextBtn);
    }
  
    await waitFor(() => expect(history.location.pathname).toEqual('/feedback'));
  
    const playAgainBtn = screen.getByTestId('btn-play-again');
  
    userEvent.click(playAgainBtn)
  
    await waitFor(() => expect(history.location.pathname).toEqual('/'));
  
    nameInput = screen.getByTestId('input-player-name');
    emailInput = screen.getByTestId('input-gravatar-email');
    btnPlay = screen.getByTestId('btn-play');
  
    expect(btnPlay).toBeDisabled();
  
    userEvent.type(nameInput, 'cba');
    userEvent.type(emailInput, 'fed@ihg');
  
    btnPlay = screen.getByTestId('btn-play');
  
    expect(btnPlay.innerHTML).toBe('Play');
  
    userEvent.click(btnPlay);
  
    await waitFor(() => expect(history.location.pathname).toEqual('/game'));
  
    for (let index = 0; index < 5; index += 1 ) {
      let correctAnw = await waitFor(() => screen.getByTestId('wrong-answer-0'));
      userEvent.click(correctAnw);
      let nextBtn = screen.getByTestId('btn-next');
      userEvent.click(nextBtn);
    }
  
    const localStorag = JSON.parse(window.localStorage.getItem('ranking'));
  
    expect(localStorag.length).toBeGreaterThan(2)
  })
})

