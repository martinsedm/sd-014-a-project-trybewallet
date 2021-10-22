import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    const testId = ['email-field', 'total-field', 'header-currency-field'];

    const BRL = expenses.reduce((total, expense) => {
      const param01 = Number(expense.value);
      const param02 = Number(expense.exchangeRates[expense.currency].ask);
      const toBRL = Math.round(param01 * param02 * 100) / 100;

      total += toBRL;
      return total;
    }, 0);

    return (
      <header>
        <label htmlFor={ testId[0] }>
          Email:
          <span name={ testId[0] } data-testid={ testId[0] }>{ email }</span>
        </label>
        <label htmlFor={ testId[1] }>
          Total:
          <span name={ testId[1] } data-testid={ testId[1] }>{ BRL.toFixed(2) }</span>
          <span name={ testId[2] } data-testid={ testId[2] }>BRL</span>
        </label>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
