import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  somaExpenses(expenses) {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      const { value, exchangeRates, currency } = expense;
      const { ask } = exchangeRates[currency];
      const result = value * ask;
      totalExpense += result;
    });
    return totalExpense;
  }

  render() {
    const { email, expenses } = this.props;
    this.somaExpenses(expenses);
    return (
      <header>
        <h2>Trybe Wallet</h2>
        <h2 data-testid="email-field">{email}</h2>
        <h2 data-testid="total-field">{ this.somaExpenses(expenses) }</h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
