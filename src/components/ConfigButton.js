import React from 'react';
import { Link } from 'react-router-dom';

class ConfigButton extends React.Component {
  render() {
    return (
      <Link to="/config">
        <button
          type="button"
          data-testid="btn-settings"
        >
          Configurações
        </button>
      </Link>
    );
  }
}

export default ConfigButton;
