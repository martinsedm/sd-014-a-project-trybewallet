import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.totalUpdate = this.totalUpdate.bind(this);
  }

  totalUpdate() {
    const { expenses } = this.props;
    const ttl = expenses.reduce((acc, item) => {
      const { currency, exchangeRates, value } = item;
      const rateKey = Object.keys(exchangeRates).find((element) => element === currency);
      const rate = exchangeRates[rateKey];
      const exchangedValue = Number(rate.ask) * Number(value);
      return acc + exchangedValue;
    }, 0);
    this.setState({ total: ttl });
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <div>
        <h2 data-testid="email-field">{email}</h2>
        <span data-testid="total-field">{ total }</span>
        <span data-testid="header-currency-field">BRL</span>
        <WalletForm totalUpdate={ this.totalUpdate } />
        <WalletTable />
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
