import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Despesas extends React.Component {
  constructor() {
    super();
    this.calculateValue = this.calculateValue.bind(this);
    this.renderCell = this.renderCell.bind(this);
    this.fixedValues = this.fixedValues.bind(this);
    this.renderEditBtn = this.renderEditBtn.bind(this);
    this.renderDeleteBtn = this.renderDeleteBtn.bind(this);
    this.handdleClick = this.handdleClick.bind(this);
    this.currencyName = this.currencyName.bind(this);
  }

  calculateValue(valor, valorDeConversao) {
    return parseFloat(valor) * parseFloat(valorDeConversao);
  }

  fixedValues(returnAsk) {
    const { expenses } = this.props;
    const retorno = [];
    const exchanges = [];
    for (let i = 0; i < expenses.length; i += 1) {
      const { exchangeRates } = expenses[i];
      const valor = expenses[i].value;
      const rate = exchangeRates[expenses[i].currency].ask;
      const rateItem = <td>{ parseFloat(rate).toFixed(2) }</td>;
      exchanges.push(rateItem);
      const total = parseFloat(valor * rate).toFixed(2);
      const item = <td>{ total }</td>;
      retorno.push(item);
    }

    if (returnAsk === true) {
      return exchanges;
    }

    return retorno;
  }

  currencyName() {
    const { expenses } = this.props;
    const names = [];

    for (let i = 0; i < expenses.length; i += 1) {
      const { exchangeRates } = expenses[i];
      const nameCurrency = exchangeRates[expenses[i].currency].name;
      const nameItem = <td>{ nameCurrency }</td>;
      names.push(nameItem);
    }

    return names;
  }

  handdleClick(id) {
    const { expenses, attWallet } = this.props;
    const filterExpenses = expenses.filter((e) => e.id !== id);
    attWallet(filterExpenses);
  }

  renderCell(text, value) {
    const { expenses } = this.props;
    const key = value;
    return (
      <td>
        <th>{ text }</th>
        { expenses.map((e) => <td key={ e.id }>{ e[key] }</td>) }
      </td>
    );
  }

  renderEditBtn(id) {
    return (
      <button id={ id } type="button">
        Editar
      </button>
    );
  }

  renderDeleteBtn(id) {
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => this.handdleClick(id) }
      >
        Excluir
      </button>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          { this.renderCell('Descrição', 'description') }
          { this.renderCell('Tag', 'tag') }
          { this.renderCell('Método de pagamento', 'method') }
          { this.renderCell('Valor', 'value') }
          <th>Moeda</th>
          { this.currencyName() }
          <th>Câmbio utilizado</th>
          { this.fixedValues(true) }
          <th>Valor convertido</th>
          { this.fixedValues() }
          <th>Moeda de conversão</th>
          { expenses.map((e) => <td key={ e.id }>Real</td>)}
          <th>Editar/Excluir</th>
          { expenses.map(
            (e) => this.renderEditBtn(e.id),
          )}
          { expenses.map(
            (e) => this.renderDeleteBtn(e.id),
          )}
        </tr>
      </table>
    );
  }
}

Despesas.propTypes = {
  expenses: PropTypes.object,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispacth) => ({
  attWallet: (expenses) => dispacth(deleteExpense(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Despesas);
