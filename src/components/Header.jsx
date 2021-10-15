import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { data: { email, total, currencyToExchange } } = this.props;
    return (
      <header>
        <p>
          Email:
          {' '}
          <span data-testid="email-field">{ email }</span>
        </p>
        <p>
          Despesa Total:
          {' '}
          <span data-testid="total-field">{ total }</span>
          {' '}
          <span data-testid="header-currency-field">{ currencyToExchange }</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  data: PropTypes.shape(
    {
      email: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      currencyToExchange: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Header;
