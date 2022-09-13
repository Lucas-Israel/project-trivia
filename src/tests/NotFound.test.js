import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import NotFound from '../pages/NotFound';

it('Testando a pagina NotFound', () =>{
  renderWithRouterAndRedux(<NotFound/>)

  const notFoun = screen.getByText('Page not found')
})
