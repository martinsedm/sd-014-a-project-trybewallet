import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, total } = this.props;
    return (

      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          Gasto total:
          {total}
        </p>
        <p data-testid="header-currency-field">
          Câmbio:
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses.reduce(
    (gastototal, { value, currency, exchangeRates }) => gastototal
    + value * exchangeRates[currency].ask, 0,
  ),
});

export default connect(mapStateToProps)(Header);
