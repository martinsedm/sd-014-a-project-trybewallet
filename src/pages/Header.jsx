import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  make(bla) {
    bla.reduce((acc, crr) => {
      const usdValue = Math.round(Number(crr.value)
     * Number(crr.exchangeRates[crr.currency].ask) * 100) / 100;

      acc += usdValue;
      return acc;
    }, 0);
  }

  render() {
    const { expenses: { expenses } } = this.props;
    const { login: { email } } = this.props;
    // console.log(expenses);
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
          Despesa: 0
          { expenses }
        </div>
        <div data-testid="header-currency-field">
          <label htmlFor="total-field">
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
  expenses: PropTypes.shape({
    expenses: PropTypes.number,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.user,
    expenses: state.wallet,
  };
}

export default connect(mapStateToProps, null)(Header);
