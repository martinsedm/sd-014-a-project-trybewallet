import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <>
        <h4 data-testid="email-field">{email}</h4>
        <h4 data-testid="total-field">{total}</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses.reduce((total, { value, currency, exchangeRates }) => total
    + value * exchangeRates[currency].ask, 0),
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
