import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Ranking extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="ranking-title">Ranking</div>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">
            Play again
          </button>
        </Link>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">
            Home
          </button>
        </Link>
      </div>
    );
  }
}

export default connect()(Ranking);
