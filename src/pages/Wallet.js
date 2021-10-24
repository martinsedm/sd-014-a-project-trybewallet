import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.totalSum = this.totalSum.bind(this);
  }

  totalSum() {
    const { expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      expenses.forEach((element) => {
        const selectedCurrrency = Object.entries(element.exchangeRates)
          .find(([key]) => key === element.currency);
        const BRLValue = Number(selectedCurrrency[1].ask) * Number(element.value);
        total += BRLValue;
      });
      return (
        <span>
          { total.toFixed(2) }
        </span>
      );
    }
    return (
      <span>
        0
      </span>
    );
  }

  render() {
    const { email } = this.props;
    const selectedCurrency = 'BRL';
    return (
      <main>
        <h2 data-testid="email-field">{email}</h2>
        <h3 data-testid="total-field">
          Despesa Gerada em BRL:
          {' '}
          {this.totalSum()}
        </h3>
        <h3
          data-testid="header-currency-field"
        >
          {`Cambio selecionado: ${selectedCurrency}`}
        </h3>
        <br />
        <Form />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
