import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfigButton from '../components/ConfigButton';
import { fetchLogApi, handleInfo } from '../redux/actions';
import logo from '../trivia.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputEmail: '',
      isBtnDisabled: true,
    };
  }

  verifyBtn = () => {
    const { inputEmail, inputName } = this.state;
    const verify = inputEmail && inputName;
    this.setState({ isBtnDisabled: !verify });
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyBtn());
  };

  handleBtn = async (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    await dispatch(fetchLogApi());
    dispatch(handleInfo(this.state));
    const { token, history } = this.props;
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { inputName, inputEmail, isBtnDisabled } = this.state;
    return (
      <div className="login-div">
        <form className="form">
          <img src={ logo } className="App-logo" alt="logo" />
          <br />
          <input
            data-testid="input-player-name"
            type="text"
            onChange={ this.handleInput }
            value={ inputName }
            name="inputName"
            placeholder="nome"
          />
          <input
            data-testid="input-gravatar-email"
            type="email"
            onChange={ this.handleInput }
            value={ inputEmail }
            name="inputEmail"
            placeholder="email"
          />
          <button
            data-testid="btn-play"
            type="submit"
            onClick={ this.handleBtn }
            disabled={ isBtnDisabled }
            className="playbtn"
          >
            Play
          </button>
          <ConfigButton />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token.token,
});

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Login);
