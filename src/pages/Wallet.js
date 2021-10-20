import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const { expAction } = this.props;
    console.log(expAction);

    const total = expAction.reduce((acc, { value, exchangeRates, currency }) => (
      acc + value * exchangeRates[currency].ask), 0);

    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          Despesa Total:
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">Câmbio BRL</p>
        </header>
        <FormWallet />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expAction: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expAction: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
