import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import Header from '../components/Header';

class Feedback extends Component {
  componentDidMount() {
    this.handleRankingBtn();
  }

  handleRankingBtn = () => {
    const { name, gravatarEmail, score } = this.props;
    let array = [];
    const storage = localStorage.getItem('ranking');
    const obj = {
      name,
      score,
      picture: `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}`,
    };
    if (storage === null) {
      array.push(obj);
      localStorage.setItem('ranking', JSON.stringify(array));
    } else {
      array = JSON.parse(localStorage.getItem('ranking'));
      array.push(obj);
      localStorage.setItem('ranking', JSON.stringify(array));
    }
  };

  render() {
    const { score, assertions } = this.props;
    const correctAnswer = 3;
    return (
      <div>
        <Header />
        <h1>
          FEEDBACK
        </h1>
        <div className="score-section">
          Total Score:
          <div data-testid="feedback-total-score">
            {score}
          </div>
          Acertos:
          <div data-testid="feedback-total-question">
            {assertions}
          </div>
        </div>
        <br />
        <div data-testid="feedback-text">
          { (assertions < correctAnswer && 'Could be better...')
          || (assertions >= correctAnswer && 'Well Done!') }
        </div>
        <br />
        <Link to="/">
          <button type="button" data-testid="btn-play-again">
            Play again
          </button>
        </Link>
        <Link to="/ranking">
          <button
            type="button"
            data-testid="btn-ranking"
          >
            Ranking
          </button>
        </Link>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};
//
const mapStateToProps = ({ player: { score, assertions, gravatarEmail, name } }) => ({
  score,
  assertions,
  gravatarEmail,
  name,
});

export default connect(mapStateToProps)(Feedback);
