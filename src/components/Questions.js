import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Questions extends Component {
  state = {
    showAnswers: false,
    answer: [],
    resultIndex: 0,
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

  showAnswersHandler = () => {
    this.setState({ showAnswers: true });
  };

  render() {
    const { results } = this.props;
    const { showAnswers, answer, resultIndex } = this.state;
    return (
      <div className="game">
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
                  onClick={ showAnswers === false && this.showAnswersHandler }
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
                  onClick={ showAnswers === false && this.showAnswersHandler }
                >
                  {question.replaceAll(/&#039;/g, '\'').replaceAll(/&eacute;/g, 'é').replaceAll(/&\w*.;/g, '"')}
                </button>
              )))}
          </div>
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
};

const mapStateToProps = ({ questions: { results } }) => ({
  results,
});

export default connect(mapStateToProps)(Questions);
