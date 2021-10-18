import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { data: { email, total } } = this.props;
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
          <span data-testid="header-currency-field">BRL</span>
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
      currencyExchange: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Header;
