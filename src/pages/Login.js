import React, { Component } from 'react';
import ConfigButton from '../components/ConfigButton';

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
          <ConfigButton />
        </form>
      </div>
    );
  }
}

export default Login;
