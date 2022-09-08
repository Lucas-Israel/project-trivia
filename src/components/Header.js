import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { name, score, gravatarEmail } = this.props;
    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}` }
          alt="imagem"
          data-testid="header-profile-picture"
        />
        <div data-testid="header-player-name">{name}</div>
        <div data-testid="header-score">{score}</div>
      </div>
    );
  }
}

Header.defaultProps = {
  gravatarEmail: '',
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string,
};

const mapStateToProps = ({ player: { name, score, gravatarEmail } }) => ({
  name,
  score,
  gravatarEmail,
});

export default connect(mapStateToProps)(Header);
