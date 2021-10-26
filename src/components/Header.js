import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { usuario, GastoTotal } = this.props;
    return (
      <div>
        <div data-testid="email-field">
          { usuario }
        </div>
        <div data-testid="total-field">
          Gastos :
          { GastoTotal }
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.user.email,
  GastoTotal: state.wallet.expenses
    .reduce((GastoTotal, { value, currency, exchangeRates }) => GastoTotal
     + value * exchangeRates[currency].ask, 0),
});

Header.propTypes = {
  usuario: PropTypes.string.isRequired,
  GastoTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
