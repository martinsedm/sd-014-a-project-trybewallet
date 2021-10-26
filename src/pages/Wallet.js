import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <>
        <Header />
        <h1>TrybeWallet</h1>
        <WalletForm />
      </>
    );
  }
}

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchCurrencies: () => dispatch(fetchAPI()),
  });

export default connect(null, mapDispatchToProps)(Wallet);
