import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { setEmail, totalExpenses } = this.props;
    return (
      <header data-testid="email-field">
        <h1>TrybeWallet</h1>
        <span>{ setEmail }</span>
        <div>
          Despesa Total:
          <span data-testid="total-field">
            {totalExpenses}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  setEmail: state.user.email,
  totalExpenses: state.wallet.expenses.reduce(
    (total, { value, currency, exchangeRates }) => (
      total + (Number(value) * Number(exchangeRates[currency].ask))
    ), 0,
  ),
});

Header.propTypes = {
  setEmail: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

Header.defaultProps = {
  totalExpenses: 0,
};

export default connect(mapStateToProps, null)(Header);
