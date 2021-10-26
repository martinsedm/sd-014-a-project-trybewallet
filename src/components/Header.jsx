import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import wallet from '../images/wallet.png';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header
        className="d-flex justify-content-between align-items-center p-3"
        style={ { backgroundColor: '#191B1C' } }
      >
        <img
          style={ { width: '50px', height: '50px' } }
          src={ wallet }
          alt="wallet-icon"
        />
        <div className="d-flex text-white align-items-center pt-2">
          <p className="fw-bold">Email:</p>
          <p
            data-testid="email-field"
            className="ml-2 fw-bold"
          >
            {email}
          </p>
          <p
            data-testid="total-field"
            className="ml-2 fw-bold"
          >
            {total}
          </p>
          <p
            data-testid="header-currency-field"
            className="ml-2 fw-bold"
          >
            BRL
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses.reduce((total, { value, currency, exchangeRates }) => total
    + value * exchangeRates[currency].ask, 0),
});

export default connect(mapStateToProps)(Header);
