import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Forms from '../components/Forms';
import Header from '../components/Header';
import { buscaApi } from '../actions';
import TableOptions from '../components/Table/TableOptions';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencieApi } = this.props;
    currencieApi();
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
};

export default connect(null, mapDisptchToProps)(Wallet);
