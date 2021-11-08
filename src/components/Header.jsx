import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const coin = 'BRL:';
    const { email, valor } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">
          Seu Email:
          { email }
        </h1>
        <h1 data-testid="total-field">
          Despesa:
          { valor }
        </h1>
        <h1 data-testid="header-currency-field">
          Cambio:
          { coin }
        </h1>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
};

const sumTotalAccount = (expenses) => {
  let total = 0;
  expenses.forEach((element) => {
    const { currency } = element;
    const { ask } = element.exchangeRates[currency];

    total += (ask * element.value);
  });
  return total;
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  valor: sumTotalAccount(state.wallet.expenses),
});
export default connect(mapStateToProps)(Header);
