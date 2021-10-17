import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    const { email, total } = this.props;

    return (
      <div>
        <header>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">{ total.toFixed(2) }</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <ExpensesForm />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses.reduce(
    (acc, {
      value,
      exchangeRates,
      currency,
    }) => acc + (value * exchangeRates[currency].ask),
    0,
  ),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Wallet);
