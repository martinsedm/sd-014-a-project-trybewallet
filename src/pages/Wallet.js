import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/FormWallet';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: 0,
    };
    this.sumCurrencies = this.sumCurrencies.bind(this);
  }

  sumCurrencies() {
    const { expenses } = this.props;
    const { totalValue } = this.state;
    const getCurrency = expenses[expenses.length - 1].currency;
    const askPrice = expenses[expenses.length - 1].exchangeRates[getCurrency].ask;
    const sum = askPrice * expenses[expenses.length - 1].value;
    this.setState({
      totalValue: totalValue + sum,
    });
  }

  render() {
    const { totalValue } = this.state;
    return (
      <div>
        TrybeWallet
        <Header totalValue={ totalValue } />
        <FormWallet sumCurrencies={ this.sumCurrencies } />
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = ({
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default connect(mapStatetoProps)(Wallet);
