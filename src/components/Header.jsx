import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    return expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + (Number(value) * exchangeRates[currency].ask)
    ), 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {' '}
          {email}
        </p>
        <span data-testid="total-field">
          {' '}
          Total gasto:
          {' '}
          { this.totalExpenses() }
        </span>
        <span data-testid="header-currency-field">
          {' '}
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
