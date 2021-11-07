import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTabela extends React.Component {
  ConvertendoBRL(exchangeRates, currency, value) {
    return (exchangeRates[currency].ask * value);
  }

  corrigindoDigitos(Num) {
    return `${Number(Num).toFixed(2)}`;
  }

  ResultTabela({ description, tag, method, value, currency, exchangeRates, id }) {
    return (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ exchangeRates[currency].name.split('/')[0] }</td>
        <td>{ this.corrigindoDigitos(exchangeRates[currency].ask) }</td>
        <td>
          {
            this.corrigindoDigitos(this.ConvertendoBRL(
              exchangeRates, currency, value,
            ))
          }
        </td>
        <td>Real</td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => this.ResultTabela(expense))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTabela.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps)(WalletTabela);
