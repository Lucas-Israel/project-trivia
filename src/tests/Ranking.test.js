import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import loginHelper from './helpers/loginHelper';
import winHelper from './helpers/winHelper';
import returnMock from './helpers/APIReturnMock';
import token from './helpers/tokenMock';

describe('Testa a pagina de ranking', () => {
  it('O ranking é atualizado corretamente, primeiro com um jogador que ganha todas, depois outro que perde todas e por ultimo um jogador que acerta 3 e erra 2', async () => {
    jest.spyOn(global, 'fetch');
    
    let { history, store } = renderWithRouterAndRedux(<App/>);

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(token),
    });
    
    loginHelper('abc', 'def@ghi');
    
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(returnMock),
    });

    await waitFor(() => expect(history.location.pathname).toEqual('/game'));

    await waitFor(() => expect(store.getState().token.token).toBe('f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6'))
  
    await winHelper(5);
  
    await waitFor(() => expect(history.location.pathname).toEqual('/feedback'));
  
    let playAgainBtn = screen.getByTestId('btn-play-again');
  
    userEvent.click(playAgainBtn);
  
    await waitFor(() => expect(history.location.pathname).toEqual('/'));
    
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(token),
    });

    loginHelper('cba', 'fed@ihg');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(returnMock),
    });
  
    await waitFor(() => expect(history.location.pathname).toEqual('/game'));
  
    await winHelper(0);

    await waitFor(() => expect(history.location.pathname).toEqual('/feedback'));
  
    playAgainBtn = screen.getByTestId('btn-play-again');
  
    userEvent.click(playAgainBtn);

    await waitFor(() => expect(history.location.pathname).toEqual('/'));

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(token),
    });

    loginHelper('aaa', 'bbb@ccc');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(returnMock),
    });

    await waitFor(() => expect(history.location.pathname).toEqual('/game'));
  
    await winHelper(3);
  
    await waitFor(() => expect(history.location.pathname).toEqual('/feedback'));

    const rankingBtn = screen.getByTestId('btn-ranking');

    userEvent.click(rankingBtn);

    await waitFor(() => expect(history.location.pathname).toEqual('/ranking'));

    const ranking = screen.getAllByTestId(/player-score-\d/g)

    expect(ranking.length).toBe(3)

    expect(ranking[0].innerHTML > ranking[1].innerHTML > ranking[2].innerHTML).toBe(true)
  })
})