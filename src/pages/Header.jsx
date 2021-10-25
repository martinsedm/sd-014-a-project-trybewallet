import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          TrybeWallet
          <h2 data-testid="email-field">{email}</h2>
          <h3 data-testid="header-currency-field">BRL</h3>
          <p data-testid="total-field">
            { expenses.reduce((acc, crr) => {
              const usdValue = Math.round(Number(crr.value)
              * Number(crr.exchangeRates[crr.currency].ask) * 100) / 100;

              acc += usdValue;
              return acc;
            }, 0)}
          </p>
        </header>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
