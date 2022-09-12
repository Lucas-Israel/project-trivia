import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import NotFound from '../pages/NotFound';

it('Testando a pagina NotFound', () =>{
  renderWithRouterAndRedux(<NotFound/>)

  const notFoun = screen.getByText('Page not found')
})
