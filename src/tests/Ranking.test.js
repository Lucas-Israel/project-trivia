import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App'

describe('Testa a pagina de ranking', () => {
  it('A pagina renderiza corretamente', async () => {
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

    const rankingBtn = screen.getByTestId('btn-ranking');

    userEvent.click(rankingBtn);

    await waitFor(() => expect(history.location.pathname).toEqual('/ranking'));

    const homeBtn = screen.getByTestId('btn-go-home');

    expect(homeBtn).toBeInTheDocument();

    const vamosVerOIntruzo = screen.getAllByTestId(/player-name-\d/g)

    expect(vamosVerOIntruzo.length).toBe(2)

    expect(vamosVerOIntruzo[0].score > vamosVerOIntruzo[1].score).toBe(false)
  })
})