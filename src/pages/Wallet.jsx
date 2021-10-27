import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.user.email,
  };
}

export default connect(mapStateToProps, null)(Wallet);
