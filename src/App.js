import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

import Configuracoes from './pages/Configuracoes';
import NotFound from './pages/NotFound';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Ranking from './pages/Ranking';

import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/config" component={ Configuracoes } />
      <Route exact path="/ranking" component={ Ranking } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}
