import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { getExpenses } = this.props;
    const totalValue = getExpenses.reduce((acc, current) => {
      const { exchangeRates, value, currency } = current;
      const rate = exchangeRates[currency].ask;
      return acc + (rate * value);
    }, 0);
    return totalValue.toFixed(2);
  }

  render() {
    const { login: { email } } = this.props;
    const expenses = this.sumExpenses();
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
