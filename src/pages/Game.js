import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchQuestions } from '../redux/actions/index';
import Questions from '../components/Questions';

class Game extends Component {
  componentDidMount() {
    const { dispatch, history, stateToken } = this.props;
    dispatch(fetchQuestions(stateToken));
    const localSToken = localStorage.getItem('token');
    if (localSToken === 'INVALID_TOKEN') history.push('/');
  }

  render() {
    const { results, history } = this.props;
    return (
      <div className="trivia">
        <Header />
        {results.length > 1 && <Questions history={ history } />}
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  stateToken: PropTypes.string.isRequired,
};

const mapStateToProps = ({ questions: { results },
  token: { response_code: responseCode, token: stateToken } }) => ({
  results,
  responseCode,
  stateToken,
});

export default connect(mapStateToProps)(Game);
