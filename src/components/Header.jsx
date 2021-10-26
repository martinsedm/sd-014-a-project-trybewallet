import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { email, total } = this.props;
    const { currency } = this.state;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ total }</span>
        <span data-testid="header-currency-field">{ currency }</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses
    .reduce((total, { value, currency, exchangeRates }) => total
    + value * exchangeRates[currency].ask, 0),
});

export default connect(mapStateToProps)(Header);
