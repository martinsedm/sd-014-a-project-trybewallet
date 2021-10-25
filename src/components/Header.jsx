import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const currency = 'BRL';
    const totalExpenses = expenses.reduce((acc, expense) => {
      const valueTotal = Math.round(Number(expense.value)
      * Number(expense.exchangeRates[expense.currency].ask) * 100) / 100;
      acc += valueTotal;
      return acc;
    }, 0);
    return (
      <header>
        <div>Trybe</div>
        <div data-testid="email-field"><span>{email}</span></div>
        <div data-testid="total-field">
          {totalExpenses.toFixed(2)}
        </div>
        <div data-testid="header-currency-field">{currency}</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Header);
