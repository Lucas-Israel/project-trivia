import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startTimer, getTimerId } from '../redux/actions';

class Timer extends Component {
  componentDidMount() {
    this.handleTimer();
  }

  handleTimer = () => {
    const { dispatch } = this.props;
    const sec = 1000;
    const timerId = setInterval(() => {
      const { timer } = this.props;
      return timer > 0 && dispatch(startTimer());
    }, sec);
    dispatch(getTimerId(timerId));
  };

  render() {
    const { timer } = this.props;
    return (
      <div>
        <h3>Timer</h3>
        <p data-testid="eusouotempo">{ timer }</p>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  timer: state.questions.timer,
});

export default connect(mapStateToProps)(Timer);
