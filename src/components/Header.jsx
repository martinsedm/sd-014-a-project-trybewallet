import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const currency = 'BRL';
    const { email, expenses } = this.props;
    const expended = expenses.reduce((acc, curr) => {
      acc += curr.value * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);

    return (
      <header>
        <label htmlFor="email-field">
          E-mail
          <span data-testid="email-field">
            { email }
          </span>
        </label>
        <label htmlFor="total-field">
          Total
          <span data-testid="total-field">{ expended }</span>
        </label>
        <label htmlFor="header-currency-field">
          Moeda
          <span data-testid="header-currency-field">{ currency }</span>
        </label>
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
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
