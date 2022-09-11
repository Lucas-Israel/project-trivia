import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from './Timer';
import { updatePlacar } from '../redux/actions';

class Questions extends Component {
  state = {
    showAnswers: false,
    answer: [],
    resultIndex: 0,
    isNextBtnDisabled: true,
  };

  componentDidMount() {
    this.sortingAnswers();
  }

  sortingAnswers = () => {
    const { results } = this.props;
    const { resultIndex } = this.state;
    const inputForRandom = 0.5;
    const answer = results[resultIndex].incorrect_answers
      .concat(results[resultIndex].correct_answer);
    answer.sort(() => Math.random() - inputForRandom);
    this.setState({ answer });
  };

  showAnswersHandler = ({ difficulty }) => {
    const { timer, timerId, dispatch } = this.props;
    clearInterval(timerId);
    this.setState({ showAnswers: true, isNextBtnDisabled: false });
    const max = 3;
    const ten = 10;
    let points = 0;
    if (difficulty === 'easy') points = 1;
    if (difficulty === 'medium') points = 2;
    if (difficulty === 'hard') points = max;
    const placar = ten + (timer * points);
    dispatch(updatePlacar(placar));
  };

  handleWrongAnswers = () => {
    const { timerId } = this.props;
    this.setState({ showAnswers: true,
      isNextBtnDisabled: false });
    clearInterval(timerId);
  };

  handleNextBtn = () => {
    const { results } = this.props;
    this.setState((prev) => ({ resultIndex: prev.resultIndex + 1 }), () => {
      const { resultIndex } = this.state;
      const inputForRandom = 0.5;
      const answer = results[resultIndex].incorrect_answers
        .concat(results[resultIndex].correct_answer);
      answer.sort(() => Math.random() - inputForRandom);
      this.setState({ answer });
    });
  };

  render() {
    const { results, timer } = this.props;
    const { showAnswers, answer, resultIndex, isNextBtnDisabled } = this.state;
    return (
      <div className="game">
        <Timer />
        <div className="game-question">
          <div data-testid="question-category">{results[resultIndex].category}</div>
          <div data-testid="question-text">
            {results[resultIndex].question
              .replaceAll(/&#039;/g, '\'').replaceAll(/&\w*.;/g, '"')}

          </div>
        </div>
        <div className="game-answers">
          <div data-testid="answer-options">
            {answer.map((question, i) => (question === results[resultIndex].correct_answer
              ? (
                <button
                  type="button"
                  data-testid="correct-answer"
                  key={ i }
                  style={ { border: showAnswers && '3px solid rgb(6, 240, 15)' } }
                  onClick={ () => this.showAnswersHandler(results[resultIndex]) }
                  disabled={ timer === 0 }
                >
                  {question.replaceAll(/&#039;/g, '\'').replaceAll(/&eacute;/g, 'é').replaceAll(/&\w*.;/g, '"')}
                </button>
              )
              : (
                <button
                  type="button"
                  data-testid={ `wrong-answer-${results[resultIndex].incorrect_answers
                    .indexOf(question)}` }
                  key={ i }
                  style={ { border: showAnswers && '3px solid red' } }
                  onClick={ () => this.handleWrongAnswers() }
                  disabled={ timer === 0 }
                >
                  {question.replaceAll(/&#039;/g, '\'').replaceAll(/&eacute;/g, 'é').replaceAll(/&\w*.;/g, '"')}
                </button>
              )))}
          </div>
          {
            !isNextBtnDisabled && (
              <button
                data-testid="btn-next"
                type="button"
                onClick={ this.handleNextBtn }
              >
                Next
              </button>)
          }
        </div>
      </div>
    );
  }
}

Questions.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(
      PropTypes.string,
    ),
  })).isRequired,
  timer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  timerId: PropTypes.number.isRequired,
};

const mapStateToProps = ({ questions: { results, timer, timerId } }) => ({
  results,
  timer,
  timerId,
});

export default connect(mapStateToProps)(Questions);
