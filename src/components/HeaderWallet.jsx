import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCurrenciesThunk } from '../actions/index';

import FormsAddexpense from './FormsAddExpense';

class HeaderWallet extends Component {
  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  render() {
    const { getEmail, getCurrencies } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`seu email: ${getEmail}`}</p>
        <p data-testid="total-field">
          0
          <span data-testid="header-currency-field">BRL </span>
        </p>
        <FormsAddexpense currencies={ getCurrencies } />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
  getCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => dispatch(addCurrenciesThunk()),
});

HeaderWallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  addCurrencies: PropTypes.func.isRequired,
  getCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWallet);
