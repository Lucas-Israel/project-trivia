import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../components/Header';

class Game extends Component {
  render() {
    return (
      <div id="trivia">
        <Header />
        <h1>GAME!</h1>
      </div>
    );
  }
}

Game.propTypes = {

};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(Game);
