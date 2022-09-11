import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends Component {
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
          Tentativas:
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
          <button type="button" data-testid="btn-ranking">
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
};

const mapStateToProps = ({ player: { score, assertions } }) => ({
  score,
  assertions,
});

export default connect(mapStateToProps)(Feedback);
