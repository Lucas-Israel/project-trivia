import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Configuracoes from '../pages/Configuracoes';

it('Testando a pagina Configurações', () =>{
  renderWithRouterAndRedux(<Configuracoes/>)

  const notFoun = screen.getByText('Configurações')
})
