import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

let totalExpense = 0;

class Header extends Component {
  makeExpense(expense, rate) {
    const totalValue = Math.round(Number(expense)
              * Number(rate) * 100) / 100;
    totalExpense += totalValue;
    return totalExpense;
  }

  render() {
    const { getExpenses } = this.props;
    const { login: { email } } = this.props;
    const value = getExpenses[getExpenses.length - 1]
      ? (getExpenses[getExpenses.length - 1]).value : 0;

    const rate = getExpenses[getExpenses.length - 1]
      ? getExpenses[getExpenses.length - 1].exchangeRates[
        Object.keys(getExpenses[getExpenses.length - 1].exchangeRates).find(
          (element) => element === (getExpenses[getExpenses.length - 1].currency),
        )].ask : 0;

    const expenses = this.makeExpense(value, rate);

    return (
      <header>
        <div data-testid="email-field">
          <label htmlFor="email-field">
            Email:
            <span>
              {' '}
              { email }
            </span>
          </label>
        </div>
        <div data-testid="total-field">
          Despesa:
          {' '}
          { expenses }
          {' '}
        </div>
        <div data-testid="header-currency-field">
          <label htmlFor="header-currency-field">
            Currency:
            <span>
              {' '}
              BRL
            </span>
          </label>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  login: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  getExpenses: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.user,
    getExpenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps, null)(Header);
