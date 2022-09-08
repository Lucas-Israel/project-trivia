import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchLogApi } from '../redux/actions';

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
    const { token, history } = this.props;
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { inputName, inputEmail, isBtnDisabled } = this.state;
    return (
      <div>
        <form>
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
          >
            Play
          </button>
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
