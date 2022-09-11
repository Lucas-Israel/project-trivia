import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { answerBtnStatus } from '../redux/actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: 30,
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  tick = () => {
    const { currentTime } = this.state;
    const { dispatch } = this.props;
    this.setState((prevState) => ({
      currentTime: currentTime === 0 ? 0 : (prevState.currentTime - 1),
    }), () => { if (currentTime === 0) dispatch(answerBtnStatus(true)); });
  };

  handleTimer = () => {
    const sec = 1000;
    setInterval(() => this.tick(), sec);
    // this.setState({ timerId });
  };

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <h3>Timer</h3>
        <p>{ currentTime }</p>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // timerId: PropTypes.number.isRequired,
};

export default connect()(Timer);
