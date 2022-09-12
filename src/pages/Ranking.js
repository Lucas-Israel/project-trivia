import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    const one = -1;
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    ranking.sort((a, b) => ((a.score <= b.score) ? 1 : one));
    this.setState({ ranking });
  }

  render() {
    const { ranking } = this.state;
    return (
      <div>
        <div data-testid="ranking-title">Ranking</div>
        <ul>
          {
            ranking.map((item, index) => (
              <li key={ item.name }>
                <img src={ item.picture } alt={ `player${index}` } />
                <div data-testid={ `player-name-${index}` }>{item.name}</div>
                <div data-testid={ `player-score-${index}` }>{item.score}</div>
              </li>
            ))
          }
        </ul>
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
