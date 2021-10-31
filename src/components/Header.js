import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ expenses, user }) {
  const total = expenses.reduce((acc, curr) => {
    const value = Number(curr.value);
    const exchange = Number(curr.exchangeRates[curr.currency].ask);
    return acc + value * exchange;
  }, 0);
  // Calculate total in BRL

  return (
    <header>
      <h4 data-testid="email-field">{user}</h4>
      <span data-testid="total-field">{total.toFixed(2)}</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  user: state.user.email,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
