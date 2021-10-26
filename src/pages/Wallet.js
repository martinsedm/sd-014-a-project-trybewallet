import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Expenses from '../components/Expenses';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { siglas } = this.props;
    siglas();
  }

  render() {
    return (
      <>
        <Header />
        <Expenses />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    siglas: () => dispatch(fetchAPI()),
  }
);

Wallet.propTypes = {
  siglas: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
