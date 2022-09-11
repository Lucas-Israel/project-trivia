import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startTimer } from '../redux/actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  tick = () => {
    const { dispatch, timer } = this.props;
    const max = 30;
    if (timer <= max && timer > 0) dispatch(startTimer());
  };

  handleTimer = () => {
    const sec = 1000;
    setInterval(() => this.tick(), sec);
    // this.setState({ timerId });
  };

  render() {
    const { timer } = this.props;
    return (
      <div>
        <h3>Timer</h3>
        <p>{ timer }</p>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  // timerId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  timer: state.questions.timer,
});

export default connect(mapStateToProps)(Timer);
