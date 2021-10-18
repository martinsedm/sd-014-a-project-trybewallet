import React from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { props: { email, sum } } = this;
    return (
      <header>
        <h1>
          TrybeWallet
        </h1>
        <div>
          <span data-testid="email-field">{email}</span>
          <div>
            <span data-testid="total-field">
              {sum}
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

const calcExpense = (acc, expense) => {
  const { exchangeRates, value, currency } = expense;
  const rate = Object.values(exchangeRates)
    .find((rates) => rates.code === currency).ask;
  return acc + value * rate;
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  sum: state.wallet.expenses.reduce(calcExpense, 0),
});

Header.propTypes = {
  email: P.string.isRequired,
  sum: P.number.isRequired,
};

export default connect(mapStateToProps)(Header);
