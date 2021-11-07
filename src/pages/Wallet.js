import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const EXPENSES = expenses.reduce((acc, curr) => (
      acc + parseFloat(curr.value) * parseFloat(curr.exchangeRates[curr.currency].ask)
    ), 0);
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            {' '}
            {
              !EXPENSES
                ? '0'
                : EXPENSES.toFixed(2)
            }
            {' '}

          </p>
          <p data-testid="header-currency-field"> BRL </p>
        </header>
        <Forms />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
