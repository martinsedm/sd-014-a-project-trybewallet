import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses.reduce((total, { value, exchangeRates, currency }) => {
      total += value * exchangeRates[currency].ask;
      return total;
    }, 0);

    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ (totalExpenses).toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
