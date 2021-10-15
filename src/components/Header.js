import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, despesas } = this.props;
    const totalExpenses = despesas.reduce((acc, exp) => {
      acc += (exp.value * exp.exchangeRates[exp.currency].ask);
      return acc;
    }, 0).toFixed(2);
    return (
      <header>
        <p
          data-testid="email-field"
        >
          {email}
        </p>
        <p data-testid="total-field">
          {totalExpenses}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
