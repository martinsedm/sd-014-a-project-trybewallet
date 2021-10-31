import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../css/header.css';

class Header extends Component {
  render() {
    const currency = 'BRL';
    const { email, expenses } = this.props;
    const expended = expenses.reduce((acc, curr) => {
      acc += curr.value * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);

    return (
      <header className="header-container">
        <label htmlFor="email-field">
          <span>E-mail: </span>
          <span data-testid="email-field">
            { email }
          </span>
        </label>
        <label htmlFor="total-field">
          <span>Total: </span>
          <span data-testid="total-field">{ expended }</span>
        </label>
        <label htmlFor="header-currency-field">
          <span>Moeda: </span>
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
