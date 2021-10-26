import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    const INITIAL_STATE = 'BRL';
    const totalExpenses = expenses.reduce((acc, expense) => {
      const { exchangeRates, value, currency = INITIAL_STATE } = expense;
      const add = exchangeRates[currency].ask;
      return acc + (add * value);
    }, 0);
    return totalExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <label htmlFor="email-field">
          E-mail
          <span data-testid="email-field">
            { email }
          </span>
        </label>
        <span data-testid="total-field">
          Despesas:
          { this.totalExpenses }
        </span>
        <span data-testid="header-currency-field">BRL</span>
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

export default connect(mapStateToProps, null)(Header);
