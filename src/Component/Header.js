import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    const totalValor = expenses.reduce((total, { value, exchangeRates, currency }) => {
      total += value * exchangeRates[currency].ask;
      return total;
    }, 0);
    return (
      <header>
        <h4 data-testid="email-field">{ email }</h4>
        <span data-testid="total-field">{ totalValor }</span>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
