import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const verify = expenses.length !== 0;
    const totalValue = (verify) ? expenses
      .reduce((acc, { value, currency, exchangeRates }) => {
        const exchangeRate = exchangeRates[currency].ask;
        return acc + (value * exchangeRate);
      }, 0) : 0;
    return (
      <div>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ totalValue }</div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { currencies, expenses } }) => ({
  email,
  currencies,
  expenses,
});

export default connect(mapStateToProps)(Header);
