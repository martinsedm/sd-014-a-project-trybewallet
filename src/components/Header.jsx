import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.somaValores = this.somaValores.bind(this);
  }

  somaValores() {
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, exchangeRates, currency }) => {
      const exchangeRate = parseFloat(exchangeRates[currency].ask);
      const valorConvertido = parseFloat(value) * exchangeRate;
      soma += valorConvertido;
    });
    return soma.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <h3 data-testid="email-field">
          email:
          {' '}
          { email }
        </h3>
        <p data-testid="total-field">{`Despesa total: ${this.somaValores()}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
