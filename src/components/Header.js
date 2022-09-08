import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { name, score, email } = this.props;
    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
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
  email: '',
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string,
};

const mapStateToProps = ({ player: { name, score, email } }) => ({
  name,
  score,
  email,
});

export default connect(mapStateToProps)(Header);
