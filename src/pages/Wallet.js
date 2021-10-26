import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import { getApiCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotalField = this.calculateTotalField.bind(this);
  }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  calculateTotalField() {
    const { field } = this.props;
    return field.reduce((acc, expense) => {
      const { value, exchangeRates, currency } = expense;
      acc += value * exchangeRates[currency].ask;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    const totalField = this.calculateTotalField();
    return (
      <main>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{totalField.toFixed(2)}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addCurrencies: PropTypes.func.isRequired,
  field: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  field: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => dispatch(getApiCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
