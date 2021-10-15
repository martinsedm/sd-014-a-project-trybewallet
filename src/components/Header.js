import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { data: { email, total, currency } } = this.props;
    return (
      <header>
        <p>
          Email:
          {' '}
          <span data-testid="email-field">{ email }</span>
        </p>
        <p>
          Despesa Total: R$
          {' '}
          <span data-testid="total-field">{ total }</span>
          {' '}
          <span data-testid="header-currency-field">{ currency }</span>
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
      currency: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Header;
