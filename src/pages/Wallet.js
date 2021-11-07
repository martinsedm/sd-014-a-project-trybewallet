import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Forms from '../components/Forms';
import Header from '../components/Header';
import { buscaApi, buscaMoeda } from '../actions';
import TableExpenses from '../components/Table/TableExpenses';
import TableOptions from '../components/Table/TableOptions';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencieApi, moedasApi } = this.props;
    currencieApi();
    // moedasApi();
  }

  render() {
    return (
      <div>
        <Header />
        <Forms />
        <TableOptions />
      </div>
    );
  }
}

const mapDisptchToProps = (dispatch) => ({
  currencieApi: () => dispatch(buscaApi()),
  // moedasApi: () => dispatch(buscaMoeda()),
});

Wallet.propTypes = {
  currencieApi: PropTypes.func.isRequired,
  moedasApi: PropTypes.func.isRequired,
};

export default connect(null, mapDisptchToProps)(Wallet);
