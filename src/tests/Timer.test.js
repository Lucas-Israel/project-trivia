import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import loginHelper from './helpers/loginHelper';
import App from '../App';
import token from './helpers/tokenMock';
import returnMock from './helpers/APIReturnMock';


describe('Testando o componente Time', () => {
  jest.setTimeout(50000)
  it ('01. O timer vai de 30 a 0 em 30 segundos (aproximadamente)', async () => {
    jest.clearAllMocks();
    
    jest.spyOn(global, 'fetch');

    renderWithRouterAndRedux(<App/>)

    loginHelper('abc', 'def@ghi');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(token),
    });

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(returnMock),
    });

    let correctBtn = await screen.findByTestId('correct-answer');

    expect(correctBtn).not.toBeDisabled();

    let timer = screen.getByTestId('eusouotempo')

    await waitFor(() => {
      expect(correctBtn).not.toBeDisabled();
      expect(timer.innerHTML).toBe('30');
    }, {timeout: 0})

    await waitFor(() => {
      expect(correctBtn).not.toBeDisabled();
      expect(timer.innerHTML).toBe('28');
      userEvent.click(correctBtn);
    }, {timeout: 3000})
  })
})