import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Configuracoes from '../pages/Configuracoes';

it('Testando a pagina Configurações', () =>{
  renderWithRouterAndRedux(<Configuracoes/>)

  const notFoun = screen.getByText('Configurações')
})
