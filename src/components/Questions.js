import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Questions extends Component {
  render() {
    const { results } = this.props;
    const indexDaPergunta = 0;
    const inputForRandom = 0.5;
    const answer = results[0].incorrect_answers
      .concat(results[indexDaPergunta].correct_answer);
    console.log(answer);
    return (
      <div>
        <div data-testid="question-category">{results[indexDaPergunta].category}</div>
        <div data-testid="question-text">{results[indexDaPergunta].question}</div>
        <div data-testid="answer-options">
          {answer.sort(() => Math.random() - inputForRandom)
            .map((question, i) => (question === results[indexDaPergunta].correct_answer
              ? (
                <button
                  type="button"
                  data-testid="correct-answer"
                  key={ i }
                >
                  {question}
                </button>
              )
              : (
                <button
                  type="button"
                  data-testid={ `wrong-answer-${results[indexDaPergunta].incorrect_answers
                    .indexOf(question)}` }
                  key={ i }
                >
                  {question}
                </button>
              )))}
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
