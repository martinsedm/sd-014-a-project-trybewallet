import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpenditure from '../components/FormExpenditure';
import { getCurrenciesThunk } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <main>
        <Header />
        <FormExpenditure />
        <div>TrybeWallet</div>
      </main>
    );
  }
}
Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => (
  {
    getCurrencies: () => dispatch(getCurrenciesThunk()),
  });

export default connect(null, mapDispatchToProps)(Wallet);
