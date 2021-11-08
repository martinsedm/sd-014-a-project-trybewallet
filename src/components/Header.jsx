import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  calculateExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((total, expense) => {
      const { value, exchangeRates, currency } = expense;
      const valueConvert = (
        Number(value) * Number(exchangeRates[currency].ask));
      return valueConvert + total;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <p data-testid="email-field">{`Email: ${email}`}</p>
          <p data-testid="total-field">{ this.calculateExpenses() }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
