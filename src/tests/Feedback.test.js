import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import Feedback from '../pages/Feedback';
import loginHelper from './helpers/loginHelper';
import winHelper from './helpers/winHelper';
import returnMock from './helpers/APIReturnMock';
import token from './helpers/tokenMock';

describe('Testando a pagina Feedback', () => {
  it('01. Renderiza corretamente a pagina feedback', () => {
    renderWithRouterAndRedux(<Feedback/>);
    const feedbackText = screen.getByTestId('feedback-text');
    const acertos = screen.getByTestId('feedback-total-question');
    const btnRank = screen.getByTestId('btn-ranking');

    expect(feedbackText).toBeInTheDocument();
    expect(acertos).toBeInTheDocument();
    expect(btnRank).toBeInTheDocument();

    const storage = window.localStorage.getItem('ranking')
  })
  
  it('02. Testa a funcionalidade da pagina feedback', async () => {
    jest.spyOn(global, 'fetch');

    let { history } = renderWithRouterAndRedux(<App/>);

    loginHelper('abc', 'def@ghi');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(token),
    });
    
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(returnMock),
    });
    
    await waitFor(() => expect(history.location.pathname).toEqual('/game'));

    await winHelper(5);

    await waitFor(() => expect(history.location.pathname).toBe('/feedback'));

    const feedbackText = screen.getByTestId('feedback-text');

    expect(feedbackText.innerHTML).toBe('Well Done!');

  })
})

