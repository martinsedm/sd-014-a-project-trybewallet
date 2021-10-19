import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { data: {
      email,
      total,
      currencies,
      // exchange,
      currencyToExchange,
      onChange } } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p>
          Email:
          {' '}
          <span data-testid="email-field">{ email }</span>
        </p>
        <p>
          Despesa Total:
          {' '}
          <span data-testid="total-field">{ Number(total).toFixed(2) }</span>
          {' '}
          <span data-testid="header-currency-field">{ currencyToExchange }</span>
        </p>
        <label htmlFor="select-exchange">
          Referência
          <select
            id="select-exchange"
            name="exchange"
            defaultValue="BRL"
            onChange={ onChange }
          >
            <option value="BRL">BRL</option>
            { currencies.map((currency, index) => (
              <option key={ `${currency}${index}` } value={ currency }>{currency}</option>
            )) }
          </select>
        </label>
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
      currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
      // exchange: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    },
  ).isRequired,
};

export default Header;
